import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, phone, email, adressePostal, NbrPieces } = body;

    if (!name || !phone || !email || !adressePostal || !NbrPieces) {
      return NextResponse.json(
        { success: false, error: "Champs manquants dans la requête." },
        { status: 400 }
      );
    }

    // Forward the request to your email API
    const response = await fetch("https://bcconciergerie.com/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        adressePostal,
        NbrPieces,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Erreur lors de l'envoi de l'email",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in send-email API route:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
