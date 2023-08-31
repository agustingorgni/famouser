import { useEffect, useState } from "react";
import { openDatabase } from "../utils/indexedDB";

const useDatabase = () => {
    const [database, setDatabase] = useState(null);

    useEffect(() => {
        if (!database) {
            openDatabase()
            .then((db) => {
                setDatabase(db);
            })
            .catch(e => console.log(e));
        }
    }, [database]);

    return [database];
};

export {
    useDatabase,
}
