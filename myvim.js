const { exec } = require( 'child_process' )

const EXIT_FAILURE = -1
const EXIT_SUCCESS = 0
const Action = {
	INSTALL: 1,
	UPDATE: 2
}

function	install() {
	console.log("Installation...")
	exec("mkdir ~/.vim")
	exec("cp -r vim/* ~/.vim")
	exec("cp vimrc ~/.vimrc")
	console.log("Done.")
}

function	update() {
	console.log("Coming soon ;)")
}

function	usage() {
	console.log(
		"Usage: node myvim.js <option>\n" +
		"Options: - install: replace the current vim config\n" +
		"         - update: update myVim with the current config"
	)
	process.exit(EXIT_FAILURE)
}

function	getOptions() {
	var opt = {
		valid: process.argv.length == 3 ? true : false
	}
	switch (process.argv[2]) {
		case "install":
			opt.action = Action.INSTALL
			break;
		case "update":
			opt.action = Action.UPDATE
		break;
		default:
			opt.valid = false
	}
	return opt
}

var opt

if (process.argv.length < 3 || !(opt = getOptions()).valid) {
	usage()
}

switch (opt.action) {
	case Action.INSTALL:
		install()
		break
	case Action.UPDATE:
		update()
		break
}
