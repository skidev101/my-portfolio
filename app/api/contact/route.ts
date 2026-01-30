// import { Resend } from "resend";
// import { NextRequest, NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();
//     if (data) {
//       return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//     }
  

//   const html = `
//     <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>New Contact Message</title>
//   </head>
//   <body
//     style="
//       margin: 0;
//       padding: 0;
//       background-color: #f7f7f8;
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
//         Roboto, Helvetica, Arial, sans-serif;
//       color: #1f2937;
//     "
//   >
//     <table
//       width="100%"
//       cellpadding="0"
//       cellspacing="0"
//       role="presentation"
//       style="padding: 32px 16px;"
//     >
//       <tr>
//         <td align="center">
//           <table
//             width="100%"
//             cellpadding="0"
//             cellspacing="0"
//             role="presentation"
//             style="
//               max-width: 560px;
//               background-color: #ffffff;
//               border-radius: 12px;
//               box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
//               padding: 32px;
//             "
//           >
//             <!-- Header -->
//             <tr>
//               <td style="padding-bottom: 24px;">
//                 <h1
//                   style="
//                     margin: 0;
//                     font-size: 20px;
//                     font-weight: 600;
//                     color: #111827;
//                   "
//                 >
//                   New contact message
//                 </h1>
//                 <p
//                   style="
//                     margin: 8px 0 0;
//                     font-size: 14px;
//                     color: #6b7280;
//                   "
//                 >
//                   Someone reached out through your portfolio.
//                 </p>
//               </td>
//             </tr>

//             <!-- Meta info -->
//             <tr>
//               <td style="padding-bottom: 24px;">
//                 <table width="100%" cellpadding="0" cellspacing="0">
//                   <tr>
//                     <td
//                       style="
//                         font-size: 14px;
//                         padding: 6px 0;
//                         color: #374151;
//                       "
//                     >
//                       <strong>Name:</strong> ${data.name}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       style="
//                         font-size: 14px;
//                         padding: 6px 0;
//                         color: #374151;
//                       "
//                     >
//                       <strong>Email:</strong> ${data.email}
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>

//             <!-- Message -->
//             <tr>
//               <td
//                 style="
//                   padding: 20px;
//                   background-color: #f9fafb;
//                   border-radius: 8px;
//                   font-size: 15px;
//                   line-height: 1.6;
//                   color: #111827;
//                 "
//               >
//                 ${data.message.replace(/\n/g, "<br />")}
//               </td>
//             </tr>

//             <!-- Footer -->
//             <tr>
//               <td
//                 style="
//                   padding-top: 24px;
//                   font-size: 12px;
//                   color: #9ca3af;
//                   text-align: center;
//                 "
//               >
//                 Sent from your portfolio contact form · ${new Date().toLocaleString()}
//               </td>
//             </tr>
//           </table>
//         </td>
//       </tr>
//     </table>
//   </body>
// </html>

//   `

//     const result = await resend.emails.send({
//       from: "Portfolio Contact <onboarding@resend.dev>",
//       to: ["skidev101@gmail.com"],
//       replyTo: data.email,
//       subject: `New portfolio message`,
//       html,
//     });
  
//     console.log("email sent", result)
//     return NextResponse.json({ success: true }, { status: 200 });
    
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
