import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchBar from "../../components/SearchBar";
import CircularLoader from "../../components/CircularLoader";
import './index.scss';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        if (API_BASE_URL) {
            axios.get(`${API_BASE_URL}/fetch_data.php`)
                .then((response) => {
                    setData(Array.isArray(response.data) ? response.data : []);
                    setLoading(false);
                })
                .catch((error) => {
                    setError("Error fetching data");
                    setLoading(false);
                });
        } else {
            // Use mock data if no API
            setData([
                { id: 1, full_name: "John Doe", email_address: "john@example.com", phone_number: "1234567890", subject: "Legal Consultation", preferred_contact: "Email", description: "Need help with contract review" },
                { id: 2, full_name: "Jane Smith", email_address: "jane@example.com", phone_number: "0987654321", subject: "Family Law", preferred_contact: "Phone", description: "Divorce proceedings inquiry" },
            ]);
            setLoading(false);
        }
    }, [API_BASE_URL]);

    const filteredData = data.filter((item) =>
        Object.values(item).some((val) =>
            val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const rows = 8;
    const totalpage = Math.ceil(filteredData.length / rows);
    const currentPageData = filteredData.slice((page - 1) * rows, page * rows);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPage(1); // Reset to first page when searching
    };

    if (loading) return <CircularLoader />;
    if (error) return <div className="dashboard__error">{error}</div>;

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <h1 className="dashboard__title">Welcome to the Admin Dashboard</h1>
                <p className="dashboard__subtitle">Manage your law firm's client inquiries and data</p>
            </div>

            <div className="dashboard__search">
                <SearchBar 
                    placeholder="Search by any keyword..."
                    onSearch={handleSearch}
                    onChange={handleSearch}
                />
            </div>

            <div className="dashboard__table-container">
                <div className="table-responsive">
                    <table className="table table-bordered dashboard__table">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Subject</th>
                                <th>Preferred Contact</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPageData.length > 0 ? (
                                currentPageData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.full_name}</td>
                                        <td>{item.email_address}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.preferred_contact}</td>
                                        <td className="dashboard__description">{item.description}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">
                                        No records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {totalpage > 1 && (
                <div className="dashboard__pagination">
                    <Stack spacing={2} alignItems="center">
                        <Pagination
                            count={totalpage}
                            page={page}
                            onChange={handleChange}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </div>
            )}
        </div>
    );
};

export default Dashboard;