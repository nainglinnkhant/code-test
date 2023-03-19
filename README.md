## Getting Started

You can run the development server:

```bash
pnpm dev
```

## Technical Decisions

The following are the technical decisions I had to make throughout the process:

- I decided to use `react-query`'s `isLoading` and `isError` instead of `Suspense` and `ErrorBoundary` as I wanted to make use of the full power of `react-query` and it would be cumbersome to handle asynchronous errors as `ErrorBoundary` can't catch these types of errors.

- I only stored `searchKeyword` in `redux` store as `posts` were never used in other parts of the application. Actually, the required result could have been achieved without the help of `redux` but I added it in case you want to see the `redux` integration.

- I decided to drop out the path aliases as I don't want to override the `cra` config with other tools like `craco` or `react-app-rewired` and they are easily achievable using `vite`.
