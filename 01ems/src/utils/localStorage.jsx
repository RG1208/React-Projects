const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare monthly report",
          description: "Compile data from all departments and prepare a summary report.",
          date: "2025-01-18",
          category: "Reports",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Review client feedback",
          description: "Analyze recent feedback to identify improvement areas.",
          date: "2025-01-20",
          category: "Feedback",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Update inventory system",
          description: "Ensure the system reflects current stock levels.",
          date: "2025-01-22",
          category: "Inventory",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Schedule team meeting",
          description: "Plan and schedule the next team strategy meeting.",
          date: "2025-01-19",
          category: "Meetings",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Design website mockup",
          description: "Create the design draft for the homepage of the new project.",
          date: "2025-01-22",
          category: "Design",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Verify project budgets",
          description: "Ensure the allocated budget matches the requirements.",
          date: "2025-01-21",
          category: "Finance",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Prepare training materials",
          description: "Compile resources for the upcoming training session.",
          date: "2025-01-25",
          category: "Training",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Test new application",
          description: "Run and verify the core functionalities of the new software.",
          date: "2025-01-21",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Resolve customer complaints",
          description: "Follow up on recent complaints to ensure resolutions.",
          date: "2025-01-22",
          category: "Support",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Update training records",
          description: "Enter new certifications and skills in employee records.",
          date: "2025-01-20",
          category: "HR",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Improve site speed",
          description: "Optimize images and scripts for faster load times.",
          date: "2025-01-23",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Write content draft",
          description: "Create a first draft for the product launch announcement.",
          date: "2025-01-19",
          category: "Content",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Update company policies",
          description: "Revise the policy document for Q1 2025.",
          date: "2025-01-24",
          category: "Compliance",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix app bugs",
          description: "Debug and resolve errors in the login module.",
          date: "2025-01-25",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Organize event logistics",
          description: "Coordinate with vendors for the upcoming company event.",
          date: "2025-01-27",
          category: "Events",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Complete documentation",
          description: "Finish pending documentation for the new project.",
          date: "2025-01-21",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Follow up with clients",
          description: "Contact clients for feedback on recent project deliverables.",
          date: "2025-01-18",
          category: "Clients",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 101,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
export const setLocalStorage= ()=>{ 
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
 }
export const getLocalStorage= ()=>{ 
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees);
    console.log(admin);
 }