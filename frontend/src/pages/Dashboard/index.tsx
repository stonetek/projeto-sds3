import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/navbar";
import { Link } from "react-router-dom";


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

                <Link className="btn btn-primary btn-lg" to="/">
                    Home
                </Link>

            </div>

            <Footer />

        </>
    );
}

export default Dashboard;