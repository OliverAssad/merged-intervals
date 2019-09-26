# MERGE INTERVALS HURDLE

this is a simple console `nodejs app` that takes an array of intervals and merges the overlapped onces into single intervals. For example the following intercals **[1,2],[2,3]** should result in **[1,3]** and if the input includes other intervals which are not overlapping it should be added without changes. (i.e. **[1,2],[2,3],[7,8]** result in **[1,4],[7,8]**).


## Prerequirements 
to test the application you need the following installed 
- git installed 
- [nodejs v10 or higher](https://nodejs.org/en/) with npm version 6 or higher
- alternatively use [docker](https://www.docker.com) to test the app.

## INSTALL THE APP 

### USING NODEJS 
to install the app using nodejs and git installed in the machine: 

``` bash
# install from github
git clone https://github.com/OliverAssad/overlapped-intervals.git
cd overlapped-intervals/

# install the app 
npm i 

# BUILD IT
npm run build 

# run the app 
npm run overlap merge [2,3],[2,5]

# OUTPUT
# for the input: [ [ 2, 3 ], [ 2, 5 ] ]
# Overlaps intervals had been merged to: [ [ 2, 5 ] ]

```

alternatively the package can be linked locally for quicker testing 
``` bash
# within the git repo
npm link 

# then run as follows
overlap merge [2,3],[2,5]

# cleanup 
npm unlink
```

### USING DOCKER
the app can alternatively be run using [docker](docker.com) if the environment is not already prepared. 

``` bash
# within the project folder
docker build --rm  -t overlaps:latest .

# enter access the container using interactive shell 
docker run --rm -it overlaps:latest sh 
# OUTPUT 
# /app # 

node dist/index.js m [1,2] [4,5]

# OUTPUT
# for the input: [ [ 1, 2 ], [ 4, 5 ] ]
# Overlaps intervals had been merged to: [ [ 1, 2 ], [ 4, 5 ] ]

# alternatively link the app directly 

npm link 
overlap m [1,2] [4,5]

```



## RUNNING THE APP 
The input of the console has to be parsed properly before it is processed. therefore make sure to use this following format 

``` bash
overlap merge | m [<int>,<int>],[<int>,<int>] 

# OR 

overlap merge | m [ <int> , <int> ],[ <int> , <int> ]
# NO SPACES BETWEEN INTERVALS


```
> WARNING: between intervals don't leave any white spaces. 


the utility is also provided with and extra help using the flags `-h | --help` e.g `overlap merge -h | --help`

## TESTING 
the application had been tested throughly using `mochajs`. to run the the tests using `nodejs`  navigate to the application root and run `npm test`

## MEMORY USAGE AND DEBUGING
the utility had been provided with the flag `--usage | -u ` to display a full usage of the memory. As well there is the flag `-s | --sort` that displays the sorted output before it gets merged for further diagnoses. 

``` bash
overlap m [1,2],[4,5],[2,9],[23,30] -s -u
# OR 
overlap m [1,2],[4,5],[2,9],[23,30] --usage 

# OUTPUT 
# the sorted input is: [ [ 1, 2 ], [ 2, 9 ], [ 4, 5 ], [ 23, 30 ] ]
# for the input: [ [ 1, 2 ], [ 4, 5 ], [ 2, 9 ], [ 23, 30 ] ]
#
#
# Overlaps intervals had been merged to: [ [ 1, 9 ], [ 23, 30 ] ]
#
#
# MEMORY USAGE STATS
# rss 18.39 MB
# heapTotal 5.39 MB
# heapUsed 3.03 MB
# external 0.85 MB
# ------------------------------------
```

