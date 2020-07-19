import React, { useState, useEffect } from "react";

import { Loading } from "./layout/Loading";

export const Notifications = () => {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        getNotifications();
    }, []);

    const getNotifications = () => {
        setLoading(false);
        setNotifications([]);
    };

    if (loading) {
        return (
            <Loading />
        )
    }

    if (notifications.length === 0) {
        return (
            <p>Nothing to see here</p>
        );
    }

    return (
        <div class="spinner-border text-secondary" role="status">
         <span class="sr-only">Loading...</span>
        </div>
    );
};
