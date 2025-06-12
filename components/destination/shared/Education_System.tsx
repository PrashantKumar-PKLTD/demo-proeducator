import React from 'react'

export default function Education_System() {
    return (
        <div className="max-w-6xl mx-auto mt-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full table-fixed text-sm text-left border-collapse">
                    <thead className="bg-yellow-400 text-white font-semibold">
                        <tr>
                            <th className="p-4 w-1/3 border-r border-yellow-300">Qualification</th>
                            <th className="p-4 w-1/3 border-r border-yellow-300">Duration</th>
                            <th className="p-4 w-1/3">PSWR</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                            <td className="p-4 border-r border-gray-200 align-top">
                                Degrees<br />
                                <span className="text-xs text-gray-500">(BA, B.Sc, BEng . .)</span>
                            </td>
                            <td className="p-4 border-r border-gray-200 align-top">3 years</td>
                            <td className="p-4 align-top">2 years</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                            <td className="p-4 border-r border-gray-200 align-top">Sandwich degrees</td>
                            <td className="p-4 border-r border-gray-200 align-top">4 years with a year in industry</td>
                            <td className="p-4 align-top">2 years</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                            <td className="p-4 border-r border-gray-200 align-top">
                                Master&apos;s degree (MA, M.Sc, LLM, MBA, MRes)
                            </td>
                            <td className="p-4 border-r border-gray-200 align-top">1 year</td>
                            <td className="p-4 align-top">2 years</td>
                        </tr>
                        <tr className="hover:bg-yellow-50 transition-colors">
                            <td className="p-4 border-r border-gray-200 align-top">
                                Research Masters<br />
                                <span className="text-xs text-gray-500">(such as MPhil., PhD, Dphil)</span>
                            </td>
                            <td className="p-4 border-r border-gray-200 align-top">2-3 years</td>
                            <td className="p-4 align-top">2 years</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
