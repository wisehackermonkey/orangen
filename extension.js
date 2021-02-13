// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { TextEncoder } = require('util');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "orangen" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('orangen.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('orangen: Generating project template files....');
		
		// [node.js - Vscode API: read clipboard text content - Stack Overflow](https://stackoverflow.com/questions/54632431/vscode-api-read-clipboard-text-content)
		let result = await fs.readFile(vscode.workspace.rootPath +"/template/README.md",(text)=>{
			
			vscode.env.clipboard.writeText("works").then((result)=>{
				console.log(result)
				console.log(text)
			})
		});
		
			
		  

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
