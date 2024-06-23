// testConnection.js
import myConnection from './config/connection.js';

async function testConnection() {
    try {
        const [rows] = await myConnection.query('SELECT 1 + 1 AS solution');
        console.log('Connection test result:', rows[0].solution); // Should print "2"
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

testConnection();
