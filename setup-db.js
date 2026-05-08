const {Pool} = require('pg');
const pool = new Pool({connectionString: 'postgresql://postgres:Shyam2402%40@localhost:5432/pickyourhire'});

const sql = `CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  department VARCHAR(100),
  location VARCHAR(100),
  job_type VARCHAR(50),
  salary_range VARCHAR(100),
  experience VARCHAR(100),
  description TEXT,
  responsibilities TEXT[],
  qualifications TEXT[],
  benefits TEXT[],
  posted_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

pool.query(sql, (err, res) => {
  if(err) {
    console.log('Error:', err.message);
  } else {
    console.log('Jobs table created successfully');
  }
  pool.end();
});
