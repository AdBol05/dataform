# Dataform
![logo_green](https://user-images.githubusercontent.com/98588523/194335228-4940c632-fed4-4666-a9ba-6ba85d1c5870.png)

Due to lack of time in development, some Astropi projects have a messy output in data.csv.
This script is used to clean the file from additional characters, leaving clean data that can be further processed.

After the file has been cleaned, the output is written to dataExport.csv file.
This file is created in the script's directory.

### WARNING: If the file dataExport.csv already exists, it will be overwritten! Always rename or move this file before cleaning another.

# Download the code

    wget raw.githubusercontent.com/AdBol05/dataform/main/index.js 


# Install NodeJS (if necessary)
NodeJS version: 16.14.2

Linux (in terminal):

    sudo apt install nodejs

Windows: https://nodejs.org/en/download/

# Install nvm (if necessary):

    curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash  
_____________________________________________________________________________________________


    source ~/.profile


_____________________________________________________________________________________________

# Run the code
Run index.js in terminal with csv file location as argument.

    node index.js (csv file path)


example:

    node index.js /home/pi/Documents/data.csv
