###helper
This folder contains several helper functions that can be used to transfer multiple csv files to postgres db set up in Microsoft Azure virtual machine. 

######cloudstorage.js
SetUp file for using azure blob to store data

######csvtopostgres.js
Import 1 csv file into PSQL table

######csvtopostgresMultipleCSVMultiTables.js
Successfully import >8000 stock csv files into >8000 PSQL tables

######dataDownloader.js
A helper function used in urlScrapper.js to download a single csv from 1 url.

######phantomJSToGetPageImages.js
PhantomJS helper function to get screenshot of webpage.

######psgrDataTypes.js
a helper function to automatically determine the PSQL datatype from input data.


