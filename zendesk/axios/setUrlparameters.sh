#!/bin/bash

baseUrl='https://admintestpatrice.zendesk.com/api/v2/incremental'; 
ticketsEndpoint='/tickets/cursor.json?';
initialStart='start_time=1585267200'; 

# CHECK FOR THE MOST RECENT FILE
mostRecentFile=$(ls -Art ../export | tail -n 1)

# IF NO FILE EXISTS BUILD AN URL WITH INITIAL START TIME
if [ -z "$mostRecentFile" ]
	then url="$baseUrl$ticketsEndpoint$initialStart" 
		 echo $url > ./ticketsEndpointUrl



# IF FILE FOUND EXTRACT CURSOR AND BUILD THE ENDPOINT URL
	else afterCursor=$(grep -oP '(?<=after_cursor":")[^"]+' ../export/$mostRecentFile )
	url="$baseUrl$ticketsEndpoint$afterCursor"
	echo $url > ./ticketsEndpointUrl
	fi