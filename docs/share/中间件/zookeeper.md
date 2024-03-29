# `zookeeper`

## 1.概念

`zookeeper` 是一个为分布式应用提供一致性服务的的开源组件，其内部是一个分层文件系统目录结构。

- **文件系统**

  `zookeeper` 提供一个多层级的节点（`znode`）命名空间，这些节点可以设置关联的数据。在内存中维护这个`树状`的目录结构，保证高吞吐和低延迟。

  四种类型的 `znode`

  - 持久化目录节点

    客户端与`zookeeper`断开连接以后，该节点依然存在

  - 持久化顺序号目录节点

    客户端与`zookeeper`断开连接后，该节点依然存在，只是`zookeeper`给该节点名称顺序编号

  - 临时目录节点

    客户端与`zookeeper`断开连接后，该节点被删除

  - 临时顺序号目录节点

    客户端与`zookeeper`断开连接后，该节点被删除，只是`zookeeper`给该节点名称进行顺序编号

- **通知机制**

  客户端注册监听它所关注的`znode`节点，`zookeeper`会对`znode`建立`watcher`事件，当`znode`发生改变时，`client`会收到`zookeeper`的通知，然后`client`根据`znode`变化作出业务的改变。

## 2.使用场景

- **配置管理**

  应用程序的配置放到`zookeeper`上，保存在`zookeeper`的某个目录节点中，然后所有相关的应用程序监听该目录节点，一旦配置信息发生变化，每个应用程序都会收到`zookeeper`的通知，然后从`zookeeper`获取新的配置信息应用到应用程序。

  ```mermaid
  sequenceDiagram
  发布者->>zookeeper:(2.更新配置信息)
  订阅者->>zookeeper:(1.注册watcher监听)
  zookeeper->>订阅者:(3.推送watcher事件)
  订阅者->>zookeeper:(4.回调拉取更新配置信息)
  ```

  

- **集群管理**

  当前集群各个主机的运行状态、存活信息

  监控服务的退出和加入，选举`master`

  所有服务约定在指定父目录下创建临时节点，然后监听父目录节点的变化信息，一旦某个服务挂掉，意味着其与`zookeeper`的连接断开，那么其创建的临时节点就会被删除，其他服务也会收到监控通知，某个兄弟目录被删除了。

  每个服务同时也会创建临时顺序编号目录节点，取编号最小的作为`master`。

- **分布式锁**

  锁服务可分为两类，保持独占，控制时序

  客户端通过创建临时节点来获取锁，获取锁之后完成业务处理会把临时节点删除；

  锁如果已经预先存在，那么所有客户就要在其下面创建临时顺序目录节点，编号最小的获得锁；

- **`master`选举**

  1.多个客户端同时发起对同一个临时节点进行创建的请求，最终只能有一个创建成功，这个成功的客户端主机就是`master`。

  2.其他客户端注册对改master的监听事件

  3.如果`master`异常，临时节点也随之删除，`zk`服务器会发送节点变更事件，`salve`接收到之后会回调重新发起创建临时节点请求，创建成功的将成为新的`master`

- **队列管理**

  - 同步队列

    当一个队列的成员都聚齐时，这个队列才有用，否则一直等待所有成员到达

  - 队列按照`FIFO`的方式进行入队和出队

    按照临时顺序目录号，进行出入队

## 3.底层原理

`zookeeper`的核心是原子广播，这个机制保证了各个`server`之间的同步。实现该机制的协议叫`zab`协议。有两种模式，恢复模式和广播模式；当服务启动或者`leader`崩溃，进入恢复模式，当`leader`被选出来，各个`server`完成了状态同步后，恢复模式结束；

为保证分布式事务的一致性，`zookeeper`采用递增事务`id`号（`zxid`）来标识事务。

（1）`server`向集群中其他服务发起询问

（2）接收询问信息，验证`zxid`是否一致，获取对方的`id`，存到自己的已询问列表中

（3）获取对方提议的`leader`信息，存到当前投票记录列表中

（4）统计选举结果，超过半数以上的推举为`leader`