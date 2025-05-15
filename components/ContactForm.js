import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    pronouns: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/create-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create contact");

      const data = await res.json();
      setResult(data.link); // The CRM contact URL
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Phone:
        <input name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <br />

      <label>
        Company Name:
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Pronouns:
        <input
          name="pronouns"
          value={formData.pronouns}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Contact"}
      </button>

      {result && (
        <p>
          ✅ Contact created:{" "}
          <a href={result} target="_blank" rel="noopener noreferrer">
            {result}
          </a>
        </p>
      )}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
    </form>
  );
}
