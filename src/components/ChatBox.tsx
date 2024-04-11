"use client";

import { useChat, Message } from "ai/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export default function ChatBox() {
	const { input, handleInputChange, handleSubmit, isLoading, messages } =
		useChat();
	const [deletedMessages, setDeletedMessages] = useState<string[]>([]);

	// Function to detect programming language
	function detectLanguage(codeBlock: string) {
		// Implement your logic to detect the language, or use a library like "highlight.js" for this purpose
		// For simplicity, let's assume the code block starts with a language identifier (e.g., "python", "java", etc.)
		const languageIdentifier = codeBlock.split("\n")[0].trim().toLowerCase();

		// You might want to map language identifiers to Prism-supported languages
		// Example mapping for common languages
		const languageMappings = {
			python: "python",
			java: "java",
			cpp: "c++",
			javascript: "javascript",
			html: "htmlbars",
			css: "css",
			sql: "sql",
			bash: "bash",
			shell: "shellsession",
			json: "json",
			markdown: "markup",
			yaml: "yaml",

			// Add more mappings as needed
		};

		return (
			languageMappings[
				languageIdentifier as keyof typeof languageMappings
			] || "plaintext"
		);
	}

	// Function to check if a block is a code block
	function isCodeBlock(block: string | string[]) {
		// Implement your logic to determine if the block is a code block
		// For example, you might check if it contains specific code-related markers
		return block.includes("```");
	}

	return (
		<div className="self-center mt-3 w-[800px] mx-auto  p-3 border border-gray-300 rounded-lg shadow-lg inline">
			<div className="space-y-4">
				{messages.map((message: Message) => (
					<div
						key={message.id}
						className={`flex text-wrap w-full ${
							message.role === "assistant"
								? "justify-start"
								: "justify-end"
						}`}
					>
						<div
							className={`p-3 bg-${
								message.role === "assistant" ? "blue-500" : "black"
							} border-white rounded-lg inline-block`}
						>
							{/* Name of person talking */}
							<h3 className="text-lg font-semibold mt-2">
								{message.role === "assistant" ? "DoubtBot" : "User"}
							</h3>

							{/* Message content */}
							{deletedMessages.includes(message.id) ? (
								<p className="m-0">Message deleted</p>
							) : (
								<div>
									{message.content
										.split("\n")
										.map(
											(currentTextBlock: string, index: number) => (
												<p key={message.id + index} className="m-0">
													{currentTextBlock}
												</p>
											)
										)}

									{/* Show "Copy Code" button for code responses */}
									{message.role === "assistant" &&
										isCodeBlock(message.content) && (
											<SyntaxHighlighter
												style={coldarkDark}
												wrapLongLines
												language={detectLanguage(message.content)}
											>
												{message.content.match(/```([\s\S]*?)```/g)}
											</SyntaxHighlighter>
										)}
								</div>
							)}
						</div>
					</div>
				))}

				<form onSubmit={handleSubmit}>
					<textarea
						className="w-full p-2 border border-gray-300 rounded-md"
						placeholder="Type your message..."
						value={input}
						onChange={(e) => {
							handleInputChange(e); // Reset the Copy Code button visibility
						}}
					/>
					<button
						type="submit"
						className="w-full mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
						disabled={isLoading}
					>
						{isLoading ? "Sending..." : "Send Message"}
					</button>
					<button
						type="submit"
						className="w-full mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
						disabled={isLoading}
					>
						{isLoading ? "Deleting..." : "Delete"}
					</button>
				</form>
			</div>
		</div>
	);
}
