# Favorite Music Website
<big><p>This website contain my favorite music. <br> It is simple no-backend website. The purpose of creating this project is to show my skills in React, TailwindCSS frameworks. <br> 
The Project contain only 2 sections of music and does't have multiple pages. I used the RapidAPI and DeezerAPI to get some data for the website. Also I used a little bit of shadcn/UI kit.<br>
The site may look weak from a design standpoint, but I'm not a professional designer and spent my time learning programming.
</p>
</big>

## View the website

<big><a href="https://koatkoetl.github.io/Music-Website/" target="blank">My favorite music</a></big>

## Screenshots

<img src="https://i.postimg.cc/sfMMrtYJ/Screenshot-from-2024-02-26-23-37-40.png" width="600">
<img src="https://i.postimg.cc/qvzbXBy3/Screenshot-from-2024-02-26-23-41-18.png" width="600">
<img src="https://i.postimg.cc/zG6ddmFP/Screenshot-from-2024-02-26-23-41-38.png" width="600">
<img src="https://i.postimg.cc/Wz58gx48/Screenshot-from-2024-02-26-23-41-47.png" width="600">

## Used Tools&Technologies

<big>
    <ul>
        <li><strong>Languages: </strong>HTML, CSS, JS</li>
        <li><strong>Frameworks: </strong>React, TailwindCSS</li>
        <li><strong>Bundler: </strong>Vite(React+JS)</li>
        <li><strong>UI: </strong>ShadcnUI</li>
    </ul>
</big>

## Script Commands

```bash
# Run the server
npm run dev

# Run the build
npm run build

# Run to preview the build
npm run preview
```

## API

### API KEY, Host, URL

```js
// Utils: DeezerAPI.jsx
// Add your own URL, KEY, Host from DeezerAPI or RapidAPI
const API_URL = apiURL;
const API_KEY = apiKEY;
const API_Host = apiHOST;
```

### Using .env example

```env
VITE_API_KEY=your_api_key
VITE_API_URL=your_api_url
VITE_API_HOST=your_api_host
```

#### Import from .env using ES6 standard

```js
const apiKEY = import.meta.env.VITE_API_KEY;
const apiURL = import.meta.env.VITE_API_URL;
const apiHOST = import.meta.env.VITE_API_HOST;
```

### How to use API

```js
// Function to use the API
// Provide endpoint from deezer
const endpointExample = "playlist/id";

const useAPI = (endpoint) => {
  const [playList, setPlayList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await API_Call(endpoint);
        setPlayList(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [endpoint]);

  return { playList, loading };
};
```

<big>
<p>The <strong>useAPI function</strong> on the website is used to retreive data from the Deezer playlists only. <br> If you want to get any data, change the useAPI to the below example:</p></big>

```js
// Function to call the API
// Provide endpoint from deezer

// Now provide any endpoint from deezer
const endpointExample = "any/anyID";

const useAPI = (endpoint) => {
  // Add your custom states

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await API_Call(endpoint);
        // Get the full data
        setPlayList(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [endpoint]);

  return {
    // Your custom states
  };
};
```
