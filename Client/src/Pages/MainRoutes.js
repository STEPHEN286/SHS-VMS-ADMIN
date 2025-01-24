import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./Dashboard";
import Candidates from "./Candidates";
import Voters from "./Voters";
import Department from "./Department";
import Result from "./Result";
import Settings from "./Settings";
import Position from "./Position";


const  router = createBrowserRouter  (
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { 
                    index: true,
                    element: <Dashboard />,
                    },
                    {
                        path: "manage-candidates",
                        element: <Candidates />,
                    },
                    {
                        path: "manage-voters",
                        element: <Voters />,
                    },
                    {
                        path: "manage-positions",
                        element: <Position />,
                    },
                    {
                        path: "settings",
                        element: <Settings />,
                    },
                    {
                        path: "manage-departments",
                        element: <Department />,
                    },
                    {
                        path: "results",
                        element: <Result />,
                    },
            ]
            },
    ]
)

export default router;


