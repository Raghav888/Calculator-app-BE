import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";
import db from "../config/firebase.js";

export async function logEvent(eventData) {
    return await addDoc(collection(db, "calculator_audit_log"), {
        ...eventData,
        timestamp: serverTimestamp(),
    });
}

export async function getAuditHistory() {
    const colRef = collection(db, "calculator_audit_log");
    const q = query(colRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => {
        const data = doc.data();

        let timestamp;
        if (data.timestamp && typeof data.timestamp.toDate === "function") {
            timestamp = data.timestamp.toDate().getTime();
        } else {
            timestamp = data.timestamp || Date.now();
        }

        return {
            id: doc.id,
            ...data,
            timestamp,
        };
    });
}