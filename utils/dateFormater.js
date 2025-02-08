export const formateDate = (data) => {
        const date = new Date(data);
        const day = date.toLocaleString("default", { day: "numeric" });
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
