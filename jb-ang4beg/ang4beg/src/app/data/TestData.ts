import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {id: 1, title: "Work"},
    {id: 2, title: "Family"},
    {id: 3, title: "Education"},
    {id: 4, title: "Home"},
    {id: 5, title: "Sport"},
    {id: 6, title: "Food"},
    {id: 7, title: "Finance"},
    {id: 8, title: "Gadgets"},
    {id: 9, title: "Health"},
    {id: 10, title: "Boats"}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Middle', color: '#6dbfa1'},
    {id: 3, title: 'High', color: '#cd727a'},
    {id: 4, title: 'Highest', color: '#d2167c'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: "Fill the tank",
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-03-24')
    },
    {
      id: 2,
      title: "Complete the report",
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2021-04-17')
    },
    {
      id: 3,
      title: "Clean the room",
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[4],
      date: new Date('2021-02-27')
    },
    {
      id: 4,
      title: 'To to the Gym',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-08-17')
    },
    {
      id: 5,
      title: 'Study Math',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Learn Algorithms',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2021-06-11')
    },
    {
      id: 7,
      title: 'Buy tickets for vacation',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Prepare supper',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Push up 200',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2021-03-12')
    },
    {
      id: 10,
      title: 'Run 100 km',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },
    {
      id: 11,
      title: 'Plan holidays',
      completed: false
    },
    {
      id: 12,
      title: 'Learn Scala',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Buy food for month',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2021-05-11')
    },
    {
      id: 14,
      title: 'Prepare fot Project Meeting',
      completed: true,
      category: TestData.categories[0]
    },
    {
      id: 15,
      title: 'Pass Java Certification',
      priority: TestData.priorities[2],
      completed: true
    },
    {
      id: 16,
      title: 'Deposit 1_000_000',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },
    {
      id: 17,
      title: 'Ask for promotion',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },
    {
      id: 18,
      title: 'Visit doctor',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2022-12-11')

    },
    {
      id: 19,
      title: 'Compare old and new Sony phones',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11')

    },
    {
      id: 20,
      title: 'Play tennis with a boss',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-03-17')
    }
  ];
}
