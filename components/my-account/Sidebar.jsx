import { Typography, Card, CardContent, Box, Avatar, Divider, ListItemText, ListItemButton } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const menuItemStyle = {
    backgroundColor: "#3c1ff4",
    color: "#fff"
}

const menuList = [
    {
        name: "Dashboard",
        url: "/my-account"
    },
    {
        name: "Order History",
        url: "/my-account/order-history"
    },
    {
        name: "Order Tracking",
        url: "/my-account/track-order"
    },
]


const Sidebar = () => {
    const router = useRouter();
    const { pathname } = router

    const isAuthenticated = useStoreState(state => state.auth.isAuthenticated);
    const authUser = useStoreState(state => state.auth.user);

    const [userName, setUserName] = useState("U");

    useEffect(() => {
        if (isAuthenticated) {
            setUserName(authUser.username)
        }
    }, [])


    return (
        <Card sx={{ mr: 5, minWidth: 250, mt: -4 }}>
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ backgroundColor: "#3c1ff4", mr: 2, }}>{userName.charAt(0)?.toUpperCase()}</Avatar>
                    <Typography gutterBottom variant="h6" component="div">
                        {userName}
                    </Typography>
                </Box>
                <Divider sx={{ my: 3 }} />
                {menuList.map(item => <ListItemButton
                    key={item.url}
                    onClick={() => router.push(item.url)}
                    sx={pathname === item.url ? { ...menuItemStyle, ":hover": {color: "#000"} } : { ":hover": menuItemStyle }}
                >
                    <ListItemText primary={item.name} />
                </ListItemButton>)}
            </CardContent>
        </Card >
    )
}
export default Sidebar;