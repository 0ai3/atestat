import React from "react";

function Privacy() {
	return (
		<div className="min-h-[calc(100vh-80px)] bg-gray-700 text-gray-100 px-6 py-16 flex items-center justify-center">
			<div className="w-full max-w-2xl">
				<h1 className="text-4xl font-extrabold mb-8 text-white border-b border-gray-700 pb-4">
					Privacy Policy
				</h1>
				<p className="mb-6 text-lg leading-relaxed text-gray-300">
					We value your privacy. This document outlines how Streamly handles
					your data and protects your information.
				</p>
				<div className="space-y-4">
					<div className="bg-gray-800 p-4 rounded-lg shadow">
						<p>
							🔒 We do not share your personal information with third parties.
						</p>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg shadow">
						<p>
							🛡️ All data is stored securely and used solely to enhance your
							experience.
						</p>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg shadow">
						<p>
							📩 For questions, reach us at{" "}
							<a
								href="mailto:privacy@streamly.com"
								className="text-blue-400 underline hover:text-blue-300"
							>
								privacy@streamly.com
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Privacy;
