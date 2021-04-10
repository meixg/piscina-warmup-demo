# piscina-warmup-demo

## run without warmup

```
npm run start
```

output:

```
threadId: 1 done: 0th at 20.103199999779463
threadId: 2 done: 0th at 26.904699999839067
threadId: 3 done: 0th at 26.526700001209974
threadId: 5 done: 0th at 29.538399998098612
threadId: 4 done: 0th at 28.85249999910593
threadId: 6 done: 0th at 28.910900000482798
threadId: 3 done: 100th at 0.0568000003695488
threadId: 7 done: 0th at 13.932300001382828
threadId: 8 done: 0th at 22.18859999999404
threadId: 9 done: 0th at 10.147300001233816
threadId: 10 done: 0th at 15.620099999010563
threadId: 1 done: 100th at 0.08020000159740448
threadId: 2 done: 100th at 0.10360000282526016
threadId: 5 done: 100th at 0.05690000206232071
threadId: 4 done: 100th at 0.05640000104904175
threadId: 6 done: 100th at 0.06940000131726265
threadId: 7 done: 100th at 0.10370000079274178
threadId: 8 done: 100th at 0.0575999990105629
threadId: 9 done: 100th at 0.056199997663497925
threadId: 10 done: 100th at 0.07080000266432762
```

## run with warmup

```
npm run start:warmup
```

output:

```
threadId: 1 done: 0th at 1.8744000010192394
threadId: 2 done: 0th at 2.410700000822544
threadId: 3 done: 0th at 2.3161999993026257
threadId: 4 done: 0th at 2.9968000017106533
threadId: 5 done: 0th at 2.564599998295307
threadId: 6 done: 0th at 3.0161999985575676
threadId: 7 done: 0th at 3.555900000035763
threadId: 8 done: 0th at 3.5732999965548515
threadId: 9 done: 0th at 3.471400000154972
threadId: 10 done: 0th at 3.1979999989271164
threadId: 3 done: 100th at 0.057099997997283936
threadId: 5 done: 100th at 0.05829999968409538
threadId: 6 done: 100th at 0.11400000005960464
threadId: 7 done: 100th at 0.05640000104904175
threadId: 8 done: 100th at 0.08650000020861626
threadId: 9 done: 100th at 0.06109999865293503
threadId: 10 done: 100th at 0.058400001376867294
threadId: 1 done: 100th at 0.06509999930858612
threadId: 2 done: 100th at 0.055799998342990875
threadId: 4 done: 100th at 0.06909999996423721
```