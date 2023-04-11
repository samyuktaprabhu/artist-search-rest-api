# artist-search-rest-api

<a name="readme-top"></a>
<h3 align="center" name="readme-top">Search Artist - REST API</h3>

  <p align="center">
    This is a RESTful API for searching music artists using the Last.fm API. It allows users to retrieve information about an artist, including their name, mbid, a link to their Last.fm page. The API also provides a URL to the image of the artist(if it is available), which can be displayed on a website or application. The results can be exported to a user-supplied CSV filename.
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#pointers-taken-into-consideration-while-designing-the-api">Pointers taken into consideration while designing the API</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This is a Node.js RESTful API for searching music artists using the Last.fm endpoint (https://www.last.fm/api/show/artist.search). The API allows users to search for an artist by name, retrieve all the results for the artist, and write the results to a user-supplied CSV filename. The CSV file includes the artist's name, MusicBrainz ID (mbid), Last.fm URL, and small image of the artist if it is available.

The CSV file contains information about artists, with the following fields:

* Name: The name of the artist
* MBID: The MusicBrainz ID of the artist
* URL: The URL of the artist
* Image (small): A boolean value indicating whether a small image of the artist exists
* Image: The URL of the image, if available; otherwise, the field contains "Data unavailable".


If the artist.search endpoint returns no results, the API retrieves random artist names from a JSON dictionary source file and repeats the process until it has gathered a list of artists.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* NodeJS
* ExpressJS
* Testing Frameworks and Libraries (Mocha, Sinon, Chai)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running, follow the steps mentioned below.

### Prerequisites

* VSCode / Terminal
* Git Repo
* Node installed on your system
### Installation

1. The repository should be cloned to your local computer by executing the following command:
   ```sh
   git clone https://github.com/samyuktaprabhu/artist-search-rest-api.git
   ```
2. To access the API, you will need to create an account with the Last.fm API provider by following this link:
     [Last.fm API Account](https://www.last.fm/api/account/create)
3. After registering your application on the API provider's website, you will be given an API key, shared secret, and some more details. These details are required for accessing the API. It is important to save these details in a safe place to avoid losing them. 
4. Open the project in your favourite IDE, such as VS Code.
5. In the root folder of the application, create a folder with extension `.env`
6. Add your API key to the `.env` file in the following format:
    ```sh
    API_KEY=<<Your_API_Key_saved_in_step_3>> 
    ```
7. Install the required node modules by running the following command:
    ```sh
    npm install
    ```
8. To run the application, use the following command in the root directory:
```sh
npm run start -- "artistName" "fileName"
```
Example: 
```sh
npm run start -- "Lloyd" "Artists"
```
9. Visit http://localhost:3000/api/searchartist in your browser to view the search results.
10. The CSV file containing the search results will be available in the output folder of your root directory.
11. To run the test cases, execute the following command in the root directory:
```sh
npm test
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Pointers taken into consideration while designing the API

* For this API, a JSON dictionary source file has been generated to handle cases where no results are returned from the artist search endpoint.
* The API primarily utilizes the JSON format to process and transmit data.
* To help users understand the structure and contents of the output CSV file, a sample CSV has been included in the 'output' folder at the root of the project.
* Whenever data is not available for a certain field, the API fills in a message indicating that the data is unavailable.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

NodeJS has been used to write this API.

Following languages, frameworks and libraries have been used in the script.

_For information on 'JavaScript', please refer to the [Documentation]([https://nodejs.org/en/docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript))_

_For information on 'NodeJS', please refer to the [Documentation](https://nodejs.org/en/docs)_

_For information on 'ExpressJS', please refer to the [Documentation](https://expressjs.com/)_

_For information on 'chai', please refer to the [Documentation](https://www.chaijs.com/)_

_For information on 'mocha', please refer to the [Documentation](https://mochajs.org/)_

_For information on 'sinon', please refer to the [Documentation](https://sinonjs.org/)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Email - samyuktaprabhu@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
