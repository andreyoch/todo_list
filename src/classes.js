class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.id = generateId();
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
}

function generateId() {
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

export { Project, Storage };