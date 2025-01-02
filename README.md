# React Native useEffect Async Operation Error

This repository demonstrates a common error in React Native applications involving the `useEffect` hook and asynchronous operations. The problem arises when an asynchronous operation initiated within `useEffect` continues to run even after the component unmounts, potentially leading to errors or memory leaks.

## Problem
The provided `bug.js` file showcases the issue: an asynchronous data fetching operation starts when the component mounts.  If the user navigates away from the component before the data is fetched and processed, the `setData` call might try to update a component that no longer exists in the DOM, resulting in an error.

## Solution
The `bugSolution.js` file illustrates the solution:  using a cleanup function in the `useEffect` hook to cancel any ongoing requests before the component is unmounted. This prevents potential errors and memory leaks. The cleanup function is crucial for managing asynchronous operations within components with short lifecycles.