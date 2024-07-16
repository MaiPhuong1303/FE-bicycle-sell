

function App() {
  return (
    <Router>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              );
            })}
          </Routes>
          <ToastContainer position="bottom-right"/>
        </QueryClientProvider>
      </div>
    </Router>
  );
}

export default App;
