The solution involves adding a cleanup function to the `useEffect` hook. This function will be executed when the component is unmounted, allowing you to cancel any pending operations. Here's the corrected code:

```javascript
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchData = async () => {
    try {
      const response = await fetch('some_url', { signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setData(await response.json());
    } catch (error) {
      if (error.name !== 'AbortError') {
        // Handle errors other than AbortError
        console.error('Fetch failed:', error);
      }
    }
  };

  fetchData();
  return () => controller.abort(); // Cleanup function
}, []);
```

This revised code uses `AbortController` to create an `AbortSignal`.  The `fetch` call now accepts the signal, allowing the request to be aborted if the component unmounts. The `return () => controller.abort();` line provides the cleanup function, which aborts the controller and thus cancels the pending request.