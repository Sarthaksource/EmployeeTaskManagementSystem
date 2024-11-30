// localStorage.clear();

const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Fix login issue",
        "description": "Resolve the bug causing login failures for certain users.",
        "category": "Bug Fix",
        "priority": "High",
        "date": "20 Feb 2024"
      },
      {
        "active": false,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Write unit tests",
        "description": "Create unit tests for the authentication module.",
        "category": "Testing",
        "priority": "Medium",
        "date": "22 Feb 2024"
      }
    ],
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Design landing page",
        "description": "Create a new landing page for the upcoming product launch.",
        "category": "Design",
        "priority": "High",
        "date": "18 Feb 2024"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Update brand guidelines",
        "description": "Revise brand guidelines document based on feedback.",
        "category": "Design",
        "priority": "Low",
        "date": "15 Feb 2024"
      }
    ],
    "taskCount": {
      "active": 1,
      "new": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Vikas",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Update database schema",
        "description": "Modify the database schema to include new user fields.",
        "category": "Database",
        "priority": "High",
        "date": "10 Feb 2024"
      },
      {
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Optimize database queries",
        "description": "Improve query performance for large datasets.",
        "category": "Database",
        "priority": "Medium",
        "date": "05 Feb 2024"
      }
    ],
    "taskCount": {
      "active": 1,
      "new": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Implement API integration",
        "description": "Integrate third-party API for data synchronization.",
        "category": "Backend",
        "priority": "Low",
        "date": "01 Feb 2024"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Set up CI/CD pipeline",
        "description": "Configure continuous integration and deployment pipeline.",
        "category": "DevOps",
        "priority": "High",
        "date": "30 Feb 2024"
      }
    ],
    "taskCount": {
      "active": 1,
      "new": 0,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Ravi",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Conduct code review",
        "description": "Review code submitted by team members and provide feedback.",
        "category": "Review",
        "priority": "Medium",
        "date": "25 Feb 2024"
      },
      {
        "active": false,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Document project requirements",
        "description": "Create detailed documentation for project specifications.",
        "category": "Documentation",
        "priority": "Low",
        "date": "20 Feb 2024"
      }
    ],
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    }
  }
];



const admin = 
[
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}; 

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employees, admin};
}; 
