/**
 * Created by kensh on 26.12.13.
 * todo constructor
 */
function todo() {
	var tasks = {};
	this.add = function(taskName) {
		if (!tasks[taskName]) {
			tasks[taskName] = taskName;
		}
	};
	this.getTasks = function(taskName) {
		if (taskName) {
			return tasks[taskName];
		} else {
			return tasks;
		}
	};
	this.show = function() {
		var fragment = document.createDocumentFragment();
		var ul = document.createElement('ul');

		for (var item in tasks) {
			if (tasks.hasOwnProperty(item)) {
				var li = document.createElement('li');
				var cb = document.createElement('input');
				cb.setAttribute("type", "checkbox");
				cb.onchecked = function() {
					console.log("aaaa");
				}

				li.innerHTML = "<span>" + cb + tasks[item] + "</span>";
				ul.appendChild(li);
			}
		}
		fragment.appendChild(ul);

		document.body.appendChild(fragment);
	};
};

var ToDo = new todo();
