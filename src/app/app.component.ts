import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Bucket List';
  subtitle = "Better to burn out than fade away!"
  filter = undefined;

  toDoList: ToDo[] = [
    {task: 'Walk like an Egyptian', completed: true},
    {task: 'Rock and Roll all night', completed: false},
    {task: 'Shout at the Devil', completed: false},
    {task: 'No sleep til Brooklyn', completed: false},
    {task: 'Eat the rich', completed: false},
    {task: 'Walk the line', completed: false},
    {task: 'Bark at the moon', completed: true},
    {task: 'Jump around', completed: true},
  ];

  addTask(newTask: string) {
		this.toDoList.push({task: newTask, completed: false});
	}

	updateTask(editTask: string, index: number) {
		this.toDoList[index].task = editTask;
	}

	completeTask(completeMe: ToDo) {
			completeMe.completed = true;
	}

	removeTask(remove: ToDo) {
		this.toDoList.splice(this.toDoList.indexOf(remove), 1);
	}

	allTasksComplete(){
		if (this.toDoList.length == 0 || this.toDoList.filter(x => x.completed == true).length == this.toDoList.length) {
			return true;
		}
		else {
			return false;
		}
	}

	assignFilter(filter: string) {
		this.filter = filter;
	}

	filterTasks() {
		if (this.filter == undefined || this.filter == null || this.filter == "")  {
			return this.toDoList;
		}
		else {
			let regex = new RegExp(this.filter, "i");
			return this.toDoList.filter(x => regex.test(x.task));
		}
	}
}

interface ToDo {
  task: string;
  completed: boolean;
}