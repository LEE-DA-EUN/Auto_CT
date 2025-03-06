from collections import defaultdict, Counter
T = int(input())
for _ in range(T):
    N = int(input())
    ls = list(map(int, input().split()))
    dict = defaultdict(list)
    cnt = Counter(ls)
    ls = [i for i in ls if cnt[i] == 6]
    for i in range(len(ls)):
        dict[ls[i]].append(i+1)
    nums = []
    for k, v in dict.items():
        nums.append([k,sum(v[0:4]),v[4]])
    nums.sort(key=lambda x: (x[1], x[2]))
    print(nums[0][0])



