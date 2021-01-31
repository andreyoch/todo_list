class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.id = generateProjectId();
    this.tasks = [];
    this.numberOfTasks = 0;
  }
}

class Storage {
  static getProjects() {
    let projects;
    if (localStorage.getItem('projects') === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  }

  static addProject(project) {
    const projects = Storage.getProjects();
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  static updateArrayOfProjects(arrayOfProjects) {
    localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
  }

  static updateProjectName(projectId, newProjectName) {
    projectId = Number.parseInt(projectId);
    const projects = Storage.getProjects();

    for (let i = 0; i < projects.length; i++) {
      if (projects[i]['id'] === projectId) {
        projects[i]['projectName'] = newProjectName;
        break;
      }
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  static updateProjectInfo(projectId, newProject) {
    projectId = Number.parseInt(projectId);
    const projects = this.getProjects();
    for (let project of projects) {
      for (const key in project) {
        if (key === 'id') {
          if (projectId === project['id']) {
            const projectObjectIndex = projects.indexOf(project);
            projects.splice(projectObjectIndex, 1);
            projects.push(newProject);
            this.updateArrayOfProjects(projects);
          } else {
            continue;
          }
        }
      }
    }
  }

  static removeProject(projectId) {
    projectId = Number.parseInt(projectId);
    const projects = Storage.getProjects();
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]['id'] === projectId) {
        projects.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  static getTasks(projectId) {
    projectId = Number.parseInt(projectId);
    const projects = this.getProjects();
    let tasks;
    for (const project of projects) {
      for (const key in project) {
        if (key === 'id') {
          if (projectId === project['id']) {
            tasks = project['tasks'];
          } else {
            continue;
          }
        }
      }
    }
    return tasks;
  }

  static updateTasksArray(projectId, newTasks) {
    projectId = Number.parseInt(projectId);
    const projects = Storage.getProjects();
    for (let project of projects) {
      for (const key in project) {
        if (key === 'id') {
          if (projectId === project['id']) {
            project['tasks'] = newTasks;
            //Update number of tasks in project
            project['numberOfTasks'] += 1;
            this.updateProjectInfo(projectId, project);
          }
        }
      }
    }
  }
static removeTask(projectId,taskId) {
  taskId = Number.parseInt(taskId)
  const tasks = this.getTasks(projectId);
  for(const task of tasks) {
    for(const key in task) {
      if(key ==='taskId' && task[key] === taskId) {
        const taskIndex = tasks.indexOf(task);
        console.log(tasks)
        tasks.splice(taskIndex,1);
        console.log(tasks)
        this.updateTasksArray(projectId,tasks)
      }
    }
  }
}
}

class Task {
  constructor(name, description, dueDate, priority,projectId) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskId = generateTaskId(Number.parseInt(projectId));
    
  }
}

function generateProjectId() {
  const projects = Storage.getProjects();
  let set = new Set();
  for (let key in projects) {
    if (key === 'id') {
      set.add(projects[key]);
    }
  }
  const setOldSize = set.size;
  let setNewSize;
  let condition = true;
  while (condition) {
    let id = Math.floor(Math.random() * 10000 + 1);
    setNewSize = set.add(id).size;
    if (setOldSize === setNewSize) {
      continue;
    } else {
      condition = false;
      return id;
    }
  }
}

//Generate unique id for task in project  
function generateTaskId(projectId) {
  const tasks = Storage.getTasks(projectId);
  let set = new Set();
  for (const task of tasks) {
    for(const key in task) {
    if (key === 'taskId') {
      set.add(task['taskId']);
    }
  }
  }
  const setOldSize = set.size;
  let setNewSize;
  let condition = true;
  while (condition) {
    let id = Math.floor(Math.random() * 10000 + 1);
    setNewSize = set.add(id).size;
    if (setOldSize === setNewSize) {
      continue;
    } else {
      condition = false;
      return id;
    }
  }
}


export { Project, Storage, Task };
