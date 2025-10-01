import { pool } from "./database.js";
import dotenv from "dotenv";
import startUpList from "../data/startUpList.js";

const createStartUpTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS ai_tools;

    CREATE TABLE ai_tools (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    ai_features TEXT,
    grade_or_subject VARCHAR(100),
    effectiveness_rating DECIMAL(2,1),
    description TEXT
);

    `;
  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 start-up table created successfully");
  } catch (err) {
    console.error("⚠️ error creating start up table table", err);
  }
};

const seedStartUpTable = async () => {
  await createStartUpTable();
  startUpList.forEach((startUp) => {
    const insertQuery = {
      text: `INSERT INTO ai_tools (id, name, ai_features, grade_or_subject, effectiveness_rating, description) VALUES ($1, $2, $3, $4, $5, $6)`,
    };
    const values = [
      startUp.id,
      startUp.name,
      startUp.AIFeatures,
      startUp.gradeOrSubject,
      startUp.effectivenessRating,
      startUp.description,
    ];
    pool.query(insertQuery, values, (err,values)=>{
        if(err){
            console.error('⚠️ error inserting start up list', err)
            return
        }
        console.log(`✅ ${startUp.name} added successfully`)
    })
  });
};

seedStartUpTable();