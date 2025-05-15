import React from "react";

function Terms() {
	return (
		<div className="min-h-[calc(100vh-80px)] bg-gray-700 text-gray-100 px-6 py-16 flex items-center justify-center">
			<div className="w-full max-w-2xl">
				<h1 className="text-4xl font-extrabold mb-8 text-white border-b border-gray-700 pb-4">
					Terms & Conditions
				</h1>
				<p className="mb-6 text-lg leading-relaxed text-gray-300">
					By using Streamly, you agree to the following terms and conditions:
				</p>
				<div className="space-y-4">
					<div className="bg-gray-800 p-4 rounded-lg shadow">
						<p>
							✅ Use the service for personal, non-commercial purposes only.
						</p>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg shadow">
						<p>
							🚫 Do not attempt to copy or redistribute content without
							permission.
						</p>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg shadow">
						<p>📜 We reserve the right to update these terms at any time.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Terms;
