

## Parallel并行收集器

### Parallel Scavenge + Parallel Old

`java8`默认使用的垃圾收集器

### 启动参数

`-XX:+UseParallelGC` 

### `gc`日志分析

```html
<!--年轻代没有足够区域存放需要分配空间的对象，发生Minor GC-->
17.536: [GC (Allocation Failure) [PSYoungGen: 2150400K->55756K(2508800K)] 2150400K->55931K(3328000K), 0.0425385 secs] [Times: user=0.11 sys=0.01, real=0.04 secs] 
...
114.014: [GC (Allocation Failure) [PSYoungGen: 2395444K->28604K(2613760K)] 2918800K->596010K(3432960K), 0.0462643 secs] [Times: user=0.34 sys=0.02, real=0.05 secs] 
122.992: [GC (System.gc()) [PSYoungGen: 1670481K->63700K(2611712K)] 2237886K->657609K(3430912K), 0.0399096 secs] [Times: user=0.26 sys=0.00, real=0.04 secs] 
```

```html
123.032: [Full GC (System.gc()) [PSYoungGen: 63700K->0K(2611712K)] [ParOldGen: 593909K->643700K(819200K)] 657609K->643700K(3430912K), [Metaspace: 236313K->236311K(1265664K)], 1.4255381 secs] [Times: user=6.99 sys=0.09, real=1.43 secs] 
...
163.465: [GC (Allocation Failure) [PSYoungGen: 2438790K->25085K(2635264K)] 3153801K->768160K(3454464K), 0.0355996 secs] [Times: user=0.27 sys=0.00, real=0.04 secs] 
<!--元空间不足，发生Full GC-->
163.500: [Full GC (Ergonomics) [PSYoungGen: 25085K->0K(2635264K)] [ParOldGen: 743074K->726220K(1228800K)] 768160K->726220K(3864064K), [Metaspace: 257365K->257365K(1286144K)], 0.4007282 secs] [Times: user=2.11 sys=0.02, real=0.40 secs] 
```

```html
3296.942: [GC (System.gc()) [PSYoungGen: 1822505K->113575K(2698752K)] 2859198K->1153940K(3927552K), 0.1386492 secs] [Times: user=0.27 sys=0.05, real=0.14 secs] 
3297.081: [Full GC (System.gc()) [PSYoungGen: 113575K->0K(2698752K)] [ParOldGen: 1040365K->1027914K(1228800K)] 1153940K->1027914K(3927552K), [Metaspace: 356037K->355718K(1380352K)], 7.7680577 secs] [Times: user=9.98 sys=7.84, real=7.77 secs] 
```



## CMS + ParNew

### 启动参数

`-XX:+UseConcMarkSweepGC`

`-XX:+UseParNewGC` 

### GC日志分析

```html
<!--年轻代空间不足，Minor GC，使用ParNew收集器-->
2022-11-24T11:31:03.243+0800: 18.851: [GC (Allocation Failure) 2022-11-24T11:31:03.243+0800: 18.851: [ParNew: 2293760K->70009K(2580480K), 0.0494733 secs] 2293760K->70009K(3399680K), 0.0496722 secs] [Times: user=0.16 sys=0.00, real=0.05 secs] 
...
...
2022-11-24T11:32:06.829+0800: 82.437: [GC (Allocation Failure) 2022-11-24T11:32:06.829+0800: 82.437: [ParNew: 2496650K->179972K(2580480K), 0.1030282 secs] 2855276K->610504K(3399680K), 0.1030868 secs] [Times: user=0.61 sys=0.02, real=0.10 secs] 
<!--1.初始标记STW，标记老年代中所有GC Roots；标记被年轻代中存活对象引用的对象-->
2022-11-24T11:32:06.933+0800: 82.541: [GC (CMS Initial Mark) [1 CMS-initial-mark: 430531K(819200K)] 655018K(3399680K), 0.0154036 secs] [Times: user=0.13 sys=0.00, real=0.01 secs] 
<!--2.并发收集阶段，从上一步找到的GC Roots开始，遍历整个老年代，标记所有存活的对象-->
2022-11-24T11:32:06.948+0800: 82.557: [CMS-concurrent-mark-start]
2022-11-24T11:32:07.162+0800: 82.771: [CMS-concurrent-mark: 0.214/0.214 secs] [Times: user=0.58 sys=0.03, real=0.21 secs] 
<!--上一阶段运行的时候，因为应用程序也在并行运行着，一些被标记了的对象的引用发生了改变，这些发生改变的，需要清除-->
2022-11-24T11:32:07.162+0800: 82.771: [CMS-concurrent-preclean-start]
2022-11-24T11:32:07.165+0800: 82.774: [CMS-concurrent-preclean: 0.003/0.003 secs] [Times: user=0.01 sys=0.02, real=0.00 secs] 
<!--可终止的并发预清理-->
2022-11-24T11:32:07.165+0800: 82.774: [CMS-concurrent-abortable-preclean-start]
2022-11-24T11:32:10.064+0800: 85.672: [CMS-concurrent-abortable-preclean: 2.897/2.898 secs] [Times: user=6.66 sys=0.36, real=2.90 secs] 
<!--3.重新标记阶段STW，标记老年代所有存活的对象，包括在并发标记阶段发生改变的或者新创建的引用对象-->
2022-11-24T11:32:10.064+0800: 85.672: [GC (CMS Final Remark) [YG occupancy: 1399446 K (2580480 K)]
<!--完成存活对象的标记-->
2022-11-24T11:32:10.064+0800: 85.672: [Rescan (parallel) , 0.0918303 secs]
<!--处理弱引用-->
2022-11-24T11:32:10.156+0800: 85.764: [weak refs processing, 0.0000711 secs]
<!--卸载不使用的类-->
2022-11-24T11:32:10.156+0800: 85.764: [class unloading, 0.0155431 secs]
2022-11-24T11:32:10.171+0800: 85.779: [scrub symbol table, 0.0453657 secs]
2022-11-24T11:32:10.217+0800: 85.825: [scrub string table, 0.0026624 secs][1 CMS-remark: 430531K(819200K)] 1829978K(3399680K), 0.1571471 secs] [Times: user=0.75 sys=0.00, real=0.16 secs] 
<!--4.并发清除阶段，清除没有标记的对象，回收空间-->
2022-11-24T11:32:10.221+0800: 85.829: [CMS-concurrent-sweep-start]
2022-11-24T11:32:10.329+0800: 85.937: [CMS-concurrent-sweep: 0.107/0.108 secs] [Times: user=0.22 sys=0.02, real=0.11 secs] 
<!--并发重置，重置CMS算法内部数据结构，为下一阶段收集做准备-->
2022-11-24T11:32:10.329+0800: 85.937: [CMS-concurrent-reset-start]
2022-11-24T11:32:10.332+0800: 85.940: [CMS-concurrent-reset: 0.003/0.003 secs] [Times: user=0.00 sys=0.00, real=0.00 secs] 

2022-11-24T11:32:13.219+0800: 88.827: [GC (Allocation Failure) 2022-11-24T11:32:13.219+0800: 88.827: [ParNew: 2473732K->223902K(2580480K), 0.0681104 secs] 2876694K->626863K(3399680K), 0.0682095 secs] [Times: user=0.49 sys=0.00, real=0.07 secs] 
2022-11-24T11:32:18.673+0800: 94.281: [GC (Allocation Failure) 2022-11-24T11:32:18.673+0800: 94.281: [ParNew: 2517662K->169731K(2580480K), 0.0888472 secs] 2920623K->611258K(3399680K), 0.0889215 secs] [Times: user=0.64 sys=0.00, real=0.09 secs] 
2022-11-24T11:32:22.720+0800: 98.328: [GC (Allocation Failure) 2022-11-24T11:32:22.720+0800: 98.328: [ParNew: 2463491K->286720K(2580480K), 0.1272165 secs] 2905018K->768677K(3399680K), 0.1273057 secs] [Times: user=0.86 sys=0.00, real=0.13 secs] 
<!--Full GC-->
2022-11-24T11:32:30.399+0800: 106.008: [Full GC (System.gc()) 2022-11-24T11:32:30.399+0800: 106.008: [CMS: 481957K->654420K(819200K), 2.0076294 secs] 1184988K->654420K(3399680K), [Metaspace: 234401K->234401K(1263616K)], 2.0120965 secs] [Times: user=1.26 sys=0.74, real=2.01 secs] 
2022-11-24T11:32:52.407+0800: 128.016: [GC (Allocation Failure) 2022-11-24T11:32:52.407+0800: 128.016: [ParNew: 2293760K->217453K(2580480K), 0.0137873 secs] 2948180K->871873K(3671184K), 0.0138834 secs] [Times: user=0.13 sys=0.00, real=0.01 secs] 
```



## G1垃圾收集器

### 启动参数

```
-XX:+UseG1GC
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:../logs/gc.log
-Xms3600M
-Xmx4000M
-Xmn1800M
-XX:+UnlockExperimentalVMOptions
-XX:InitiatingHeapOccupancyPercent=40
-XX:G1NewSizePercent=16
-XX:G1MaxNewSizePercent=35

```

### 日志解读

#### 1. Young GC

```html
<!--【1.总：JVM启动后的相对时间：17.132，收集类型，新生代，Eden区，收集花费时间0.0469581秒，即47毫秒】-->
17.132: [GC pause (G1 Evacuation Pause) (young), 0.0469581 secs]
   <!--【2.详细过程：并行收集任务运行时间18.7毫秒，8个线程执行垃圾回收，可用参数-XX:ParallelGCThreads设置】-->
   [Parallel Time: 18.7 ms, GC Workers: 8]
   	  <!--【JVM启动后17132.7毫秒，第一个垃圾收集线程开始工作；17132.9毫秒后，最后一个手机线程开始工作】-->
      [GC Worker Start (ms): Min: 17132.7, Avg: 17132.8, Max: 17132.9, Diff: 0.3]
      <!--【扫描root集合（线程栈、JNI、全局变量、系统表等）】-->
      [Ext Root Scanning (ms): Min: 0.6, Avg: 1.0, Max: 2.3, Diff: 1.7, Sum: 7.8]
      <!--【处理日志缓冲区，更新Rset，确保当前Region的Rset最新】-->
      [Update RS (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.0]
         [Processed Buffers: Min: 0, Avg: 0.0, Max: 0, Diff: 0, Sum: 0]
      <!--【扫描新生代分区的Rset】-->
      [Scan RS (ms): Min: 0.0, Avg: 0.1, Max: 0.1, Diff: 0.1, Sum: 0.8]
      <!--【扫描root节点】-->
      [Code Root Scanning (ms): Min: 0.0, Avg: 2.5, Max: 16.9, Diff: 16.9, Sum: 20.3]
      <!--【将前面扫描存活对象拷贝到目标Region】-->
      [Object Copy (ms): Min: 0.8, Avg: 14.3, Max: 16.8, Diff: 16.0, Sum: 114.4]
      <!--【垃圾收集线程完成任务，进入临界区】-->
      [Termination (ms): Min: 0.0, Avg: 0.5, Max: 0.6, Diff: 0.6, Sum: 4.2]
         [Termination Attempts: Min: 1, Avg: 79.6, Max: 113, Diff: 112, Sum: 637]
      <!--【垃圾收集线程完成其他任务】-->
      [GC Worker Other (ms): Min: 0.0, Avg: 0.0, Max: 0.1, Diff: 0.0, Sum: 0.3]
      <!--【展示每个垃圾收集线程工作的最大、最小，平均及总共时间】-->
      [GC Worker Total (ms): Min: 18.4, Avg: 18.5, Max: 18.6, Diff: 0.2, Sum: 147.8]
     <!-- 【JVM启动后17151.3毫秒，第一个垃圾收集线程工作结束】-->
      [GC Worker End (ms): Min: 17151.3, Avg: 17151.3, Max: 17151.3, Diff: 0.0]
   <!--【3.新生代GC中的一些任务】-->
   [Code Root Fixup: 0.1 ms]
   [Code Root Purge: 0.0 ms]
   <!--【清理card table】-->
   [Clear CT: 0.5 ms]
   [Other: 27.6 ms]
   	  <!--【选择哪些Region作为CSet】-->
      [Choose CSet: 0.0 ms]
      <!--【处理java中的各种引用】-->
      [Ref Proc: 25.9 ms]
      [Ref Enq: 0.2 ms]
      [Redirty Cards: 0.4 ms]
      <!--【超大对象回收处理】-->
      [Humongous Register: 0.1 ms]
      [Humongous Reclaim: 0.0 ms]
      <!--【释放掉CSet中Region占用的内存空间】-->
      [Free CSet: 0.6 ms]
   <!--【Eden区从占用1024M到回收后0B，分区缩小为969M，Survivors空间从0增长到55M，整个堆空间从1024M占用缩减到54.9M】-->
   [Eden: 1024.0M(1024.0M)->0.0B(969.0M) Survivors: 0.0B->55.0M Heap: 1024.0M(3600.0M)->54.9M(3600.0M)]
 <!--【本次新生代垃圾收集的时间，消耗CPU时间0.22秒，内核态线程消耗CPU时间0.03秒，垃圾收集真正耗时0.05秒】-->
 [Times: user=0.22 sys=0.03, real=0.05 secs] 
```

#### 2. 并发标记周期

```html
<!--【初始标记，STW，触发一次Young GC】-->
188.769: [GC pause (G1 Evacuation Pause) (young) (initial-mark) (to-space exhausted), 0.3093628 secs]
   [Parallel Time: 280.3 ms, GC Workers: 8]
      [GC Worker Start (ms): Min: 188769.5, Avg: 188769.5, Max: 188769.5, Diff: 0.1]
      [Ext Root Scanning (ms): Min: 8.8, Avg: 17.0, Max: 68.9, Diff: 60.1, Sum: 136.1]
      [Update RS (ms): Min: 1.5, Avg: 2.1, Max: 2.4, Diff: 0.9, Sum: 16.5]
         [Processed Buffers: Min: 4, Avg: 6.0, Max: 12, Diff: 8, Sum: 48]
      [Scan RS (ms): Min: 39.3, Avg: 39.5, Max: 39.9, Diff: 0.6, Sum: 316.0]
      [Code Root Scanning (ms): Min: 0.0, Avg: 0.0, Max: 0.1, Diff: 0.1, Sum: 0.2]
      [Object Copy (ms): Min: 169.2, Avg: 221.3, Max: 229.5, Diff: 60.3, Sum: 1770.4]
      [Termination (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.3]
         [Termination Attempts: Min: 1, Avg: 173.4, Max: 218, Diff: 217, Sum: 1387]
      [GC Worker Other (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.1]
      [GC Worker Total (ms): Min: 279.9, Avg: 280.0, Max: 280.0, Diff: 0.1, Sum: 2239.6]
      [GC Worker End (ms): Min: 189049.4, Avg: 189049.4, Max: 189049.5, Diff: 0.0]
   [Code Root Fixup: 0.0 ms]
   [Code Root Purge: 0.0 ms]
   [Clear CT: 0.4 ms]
   [Other: 28.7 ms]
	 <!--【疏散失败】-->
      [Evacuation Failure: 26.7 ms]
      [Choose CSet: 0.0 ms]
      [Ref Proc: 0.1 ms]
      [Ref Enq: 0.0 ms]
      [Redirty Cards: 0.4 ms]
      [Humongous Register: 0.1 ms]
      [Humongous Reclaim: 0.1 ms]
      [Free CSet: 0.6 ms]
   [Eden: 139.0M(2776.0M)->0.0B(2800.0M) Survivors: 24.0M->0.0B Heap: 3972.9M(4000.0M)->3965.9M(4000.0M)]
 [Times: user=0.73 sys=0.03, real=0.31 secs] 
<!--【并发root区域扫描】-->
63.229: [GC concurrent-root-region-scan-start]
63.251: [GC concurrent-root-region-scan-end, 0.0216084 secs]
<!--【并发标记】-->
63.251: [GC concurrent-mark-start]
63.522: [GC concurrent-mark-end, 0.2707228 secs]
<!--【最终标记，修正上一次标记结果】-->
63.522: [GC remark 63.522: [Finalize Marking, 0.0001454 secs] 63.522: [GC ref-proc, 0.0041888 secs] 63.527: [Unloading, 0.0148012 secs], 0.0200650 secs]
 [Times: user=0.17 sys=0.00, real=0.02 secs] 
<!--【独占清理，计算各个区域的存活对象和GC回收比例，并进行排序】-->
63.544: [GC cleanup 481M->480M(3600M), 0.0052624 secs]
 [Times: user=0.00 sys=0.00, real=0.01 secs] 
<!--【并发清理】-->
63.550: [GC concurrent-cleanup-start]
63.550: [GC concurrent-cleanup-end, 0.0000105 secs]
```

日志中比较特殊的地方：`to-space exhausted`

在一次`Young GC`之后，`survivor`区和老年代没有足够的空间继续容纳存活的对象（大对象可能会导致存活对象变多），转移失败会导致较长的`Young GC`耗时，这个时候，收集器会将这些未成功复制的分区全部置为老年代分区。

调优手段：首先，从应用层尽量避免过多的大对象分配；降低年轻代区域大小，提高回收次数，变相的增加大对象的回收次数。

#### 3. Mixed GC

并发收集阶段结束后发生；在混合垃圾收集处理的`CSet`不仅包括新生代的分区，还包括老年代分区（并发标记阶段标记出来的那些老年代分区）

老年代的堆占有率达到参数 `-XX：InitiatingHeapOccupancyPercent` 设定的值时触发

```html
241.813: [GC pause (G1 Evacuation Pause) (mixed), 0.0287869 secs]
   [Parallel Time: 23.6 ms, GC Workers: 8]
      [GC Worker Start (ms): Min: 241813.0, Avg: 241813.1, Max: 241813.3, Diff: 0.3]
      [Ext Root Scanning (ms): Min: 1.9, Avg: 3.8, Max: 10.1, Diff: 8.2, Sum: 30.3]
      [Update RS (ms): Min: 0.0, Avg: 5.0, Max: 6.5, Diff: 6.5, Sum: 39.9]
         [Processed Buffers: Min: 0, Avg: 11.5, Max: 41, Diff: 41, Sum: 92]
      [Scan RS (ms): Min: 0.0, Avg: 0.9, Max: 1.2, Diff: 1.1, Sum: 7.3]
      [Code Root Scanning (ms): Min: 0.0, Avg: 0.0, Max: 0.1, Diff: 0.1, Sum: 0.3]
      [Object Copy (ms): Min: 13.1, Avg: 13.5, Max: 13.6, Diff: 0.5, Sum: 107.7]
      [Termination (ms): Min: 0.0, Avg: 0.0, Max: 0.0, Diff: 0.0, Sum: 0.1]
         [Termination Attempts: Min: 1, Avg: 28.3, Max: 40, Diff: 39, Sum: 226]
      [GC Worker Other (ms): Min: 0.0, Avg: 0.1, Max: 0.1, Diff: 0.1, Sum: 0.5]
      [GC Worker Total (ms): Min: 23.0, Avg: 23.3, Max: 23.3, Diff: 0.3, Sum: 186.1]
      [GC Worker End (ms): Min: 241836.3, Avg: 241836.4, Max: 241836.4, Diff: 0.1]
   [Code Root Fixup: 0.1 ms]
   [Code Root Purge: 0.0 ms]
   [Clear CT: 0.5 ms]
   [Other: 4.7 ms]
      [Choose CSet: 0.1 ms]
      [Ref Proc: 3.1 ms]
      [Ref Enq: 0.2 ms]
      [Redirty Cards: 0.1 ms]
      [Humongous Register: 0.1 ms]
      [Humongous Reclaim: 0.1 ms]
      [Free CSet: 0.6 ms]
   [Eden: 988.0M(988.0M)->0.0B(988.0M) Survivors: 36.0M->36.0M Heap: 2170.6M(3600.0M)->1137.8M(3600.0M)]
 [Times: user=0.22 sys=0.00, real=0.03 secs] 
```

#### 4. Full GC

堆内存空间不足以分配新的对象，或者元空间使用率达到设定的阈值，会触发`Full GC`

```html
<!--System.gc()触发的Full GC-->
111.789: [Full GC (System.gc())  841M->629M(3600M), 1.8352739 secs]
   [Eden: 16.0M(1008.0M)->0.0B(1024.0M) Survivors: 16.0M->0.0B Heap: 841.3M(3600.0M)->629.1M(3600.0M)], [Metaspace: 236174K->236173K(1265664K)]
 [Times: user=1.94 sys=0.63, real=1.84 secs] 
```

```html
<!--堆内存分配失败触发的Full GC-->
189.157: [Full GC (Allocation Failure)  3972M->757M(3600M), 1.7356564 secs]
   [Eden: 0.0B(2800.0M)->0.0B(2800.0M) Survivors: 0.0B->0.0B Heap: 3972.9M(4000.0M)->757.5M(3600.0M)], [Metaspace: 299178K->294749K(1327104K)]
 [Times: user=2.59 sys=0.03, real=1.74 secs] 
```



### JVM调优实战

设置启动参数，启动我们的`java`程序

```
-Xverify:none
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:../logs/gc.log
-Xms3600M
-Xmx4000M
-Xmn1024M
-XX:MetaspaceSize=280M
-XX:MaxMetaspaceSize=512M
-XX:+UseG1GC
```

> `jps -l` 查看进程信息，找到进程`id`
>
> `jstat -calss [pid]` 查看类加载情况
>
> `jstat -gc [pid] ` 查看进程`gc`情况

![image-20221123170945219](image/jvm1.png)

类加载时间，107.41秒，`GC`时间7.012秒，`Young GC`次数118次，较为频繁，

> 修改参数配置，初始堆内存调大

`-Xmn2800M`

下面的参数配置是为了让`G1`收集器能够触发`Mixed GC`

`-XX:+UnlockExperimentalVMOptions`
`-XX:InitiatingHeapOccupancyPercent=40`
`-XX:G1NewSizePercent=16`
`-XX:G1MaxNewSizePercent=35`


![image-20221123193430333](image/jvm2.png)

`Young GC`次数减少，但是触发了`Full GC`，`GC`总时长还是变长了，

```html
<!--经过几次Young GC-->
[Eden: 2617.0M(2617.0M)->0.0B(2776.0M) Survivors: 183.0M->24.0M Heap: 3940.9M(4000.0M)->3833.9M(4000.0M)]
[Eden: 139.0M(2776.0M)->0.0B(2800.0M) Survivors: 24.0M->0.0B Heap: 3972.9M(4000.0M)->3965.9M(4000.0M)]
[Eden: 7168.0K(2800.0M)->0.0B(2800.0M) Survivors: 0.0B->0.0B Heap: 3972.9M(4000.0M)->3972.9M(4000.0M)]
[Eden: 0.0B(2800.0M)->0.0B(2800.0M) Survivors: 0.0B->0.0B Heap: 3972.9M(4000.0M)->3972.9M(4000.0M)]
<!--Young GC之后，对象都到了老年代，堆内存几乎要满了，此时触发Full GC-->
189.157: [Full GC (Allocation Failure)  3972M->757M(3600M), 1.7356564 secs]
   [Eden: 0.0B(2800.0M)->0.0B(2800.0M) Survivors: 0.0B->0.0B Heap: 3972.9M(4000.0M)->757.5M(3600.0M)], [Metaspace: 299178K->294749K(1327104K)]
 [Times: user=2.59 sys=0.03, real=1.74 secs] 
```

> 将初始堆内存适当调小一点，

`-Xmn2000M`

![image-20221123184932027](image/jvm3.png)

阅读`GC`日志，发现触发了`Full GC`是因为显示调用`System.gc()`，

```
113.168: [Full GC (System.gc())  3107M->629M(3600M), 2.0742394 secs]
   [Eden: 2440.0M(2623.0M)->0.0B(2800.0M) Survivors: 177.0M->0.0B Heap: 3107.3M(3600.0M)->629.3M(3600.0M)], [Metaspace: 234445K->234443K(1263616K)]
 [Times: user=2.80 sys=0.03, real=2.08 secs] 
```

> 使用 `-XX:+DisableExplicitGC` ，禁止显式执行`System.gc()`

![image-20221123190829708](image/jvm4.png)

调整后启动参数配置如下：

```html
<!--禁掉类加载过程字节码校验-->
-Xverify:none
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:../logs/gc.log
-Xms3600M
-Xmx4000M
-Xmn2800M
-XX:MetaspaceSize=280M
-XX:MaxMetaspaceSize=512M
-XX:+UseG1GC
-XX:+UnlockExperimentalVMOptions
-XX:InitiatingHeapOccupancyPercent=40
-XX:G1NewSizePercent=16
-XX:G1MaxNewSizePercent=35
<!--禁止显式执行`System.gc()`-->
-XX:+DisableExplicitGC
```

总结：配合程序应用，分析程序启动过程中产生的gc日志，来深入理解G1垃圾收集器的垃圾回收过程，最后通过启动参数配置来实际调优，认识G1收集器相关启动参数。

