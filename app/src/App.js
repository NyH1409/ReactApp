import { Card } from "./components/Card";
import { Crumb } from "./components/crumb";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Menu } from "./components/sidemenu";
import { Tbody } from "./components/subcomponents/tbody";
import { Tfoot } from "./components/subcomponents/tfoot";
import { Thead } from "./components/subcomponents/thead";


function App() {
  return (
    <div className="App">
        <Header />
        <div id="layoutSidenav">
            <Menu />
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tables</h1>
                        <Crumb />
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <Card>
                          <Thead />
                          <Tfoot />
                          <Tbody />
                        </Card>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;
