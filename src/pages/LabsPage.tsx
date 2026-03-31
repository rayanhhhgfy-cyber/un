import ChemistryIndex from "./ChemistryIndex.tsx";
import PhysicsIndexPage from "./PhysicsIndexPage.tsx";

export default function LabsPage() {
  return (
    <div className="pt-14">
      {/* Old labs landing - chemistry and physics index */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto p-8">
        <div className="border-r border-gray-800 pr-8">
          <h1 className="text-4xl font-bold mb-8 text-white">Chemistry Labs</h1>
          <ChemistryIndex />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-8 text-white">Physics Labs</h1>
          <PhysicsIndexPage />
        </div>
      </div>
    </div>
  );
}
