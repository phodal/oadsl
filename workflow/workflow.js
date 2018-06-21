let data = {
  transact: {
    name: 'transact',
    status: 'success'
  },
  approve: {
    name: 'approve',
    status: 'processing'
  },
  bank: {
    name: 'approve',
    status: 'todo'
  }
}


function workflowParer() {
	this.generateProcess = function() {
	  this.processes = Object.keys(this.data);
	  for (let i = 0; i < this.processes.length; i++) {
	    ...
	  }
	}
}