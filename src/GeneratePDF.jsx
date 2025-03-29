import jsPDF from "jspdf";
import "jspdf-autotable";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GeneratePDF = ({ extractedText }) => {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    import("./script.png").then((image) => {
      setLogo(image.default);
    });
  }, []);

  const handleGeneratePDF = () => {
    if (!extractedText) {
      alert("No text available to generate PDF!");
      return;
    }

    const doc = new jsPDF();

    // Add border
    doc.setDrawColor(0, 0, 0);
    doc.rect(5, 5, 200, 287);

    // Add Logo
    if (logo) {
      doc.addImage(logo, "PNG", 80, 10, 50, 50);
    }

    // Add Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("ScriptAI - Image to Text Converter", 105, 70, null, null, "center");

    // Add Extracted Text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Extracted Text:", 20, 90);
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.text(extractedText, 20, 100, { maxWidth: 170, align: "left" });

    // Save PDF
    doc.save("Extracted_Text.pdf");
  };

  return (
    <button onClick={handleGeneratePDF} disabled={!extractedText} className="pdf-btn">
      📄 Download as PDF
    </button>
  );
};

// ✅ Add PropTypes validation
GeneratePDF.propTypes = {
  extractedText: PropTypes.string.isRequired, // Ensures extractedText is a required string
};

export default GeneratePDF;
