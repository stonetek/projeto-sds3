import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/navbar";
import { Link } from "react-router-dom";
import Home from "assets/img/home.jpeg";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary" >Eorlingas DashBoard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Percentual de Sucesso</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as Vendas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary" > Todas as Vendas</h2>
                </div>

                <DataTable />


                <div className="container" >
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link to="/">
                            <img className="displayed" src={Home} alt="DevSuperior" width="60" />
                        </Link>
                    </nav>
                </div>

            </div>

            <Footer />

        </>
    );
}

export default Dashboard;