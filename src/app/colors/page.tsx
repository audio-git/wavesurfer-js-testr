import TestList from "../_components/TestList";

export default function TestPage() {
  return (
    <main className="flex gap-8">
      <section>
        <h2 className="text-xl">Colors</h2>
        <div className="flex gap-4">
          <ul>
            <h3 className="mb-2">Primary</h3>
            <li className="w-16 h-16 bg-primary-50"></li>
            <li className="w-16 h-16 bg-primary-100"></li>
            <li className="w-16 h-16 bg-primary-200"></li>
            <li className="w-16 h-16 bg-primary-300"></li>
            <li className="w-16 h-16 bg-primary-400"></li>
            <li className="w-16 h-16 bg-primary-500"></li>
            <li className="w-16 h-16 bg-primary-600"></li>
            <li className="w-16 h-16 bg-primary-700"></li>
            <li className="w-16 h-16 bg-primary-800"></li>
            <li className="w-16 h-16 bg-primary-900"></li>
          </ul>
          <ul>
            <h3 className="mb-2">Secondary</h3>
            <li className="w-16 h-16 bg-secondary-50"></li>
            <li className="w-16 h-16 bg-secondary-100"></li>
            <li className="w-16 h-16 bg-secondary-200"></li>
            <li className="w-16 h-16 bg-secondary-300"></li>
            <li className="w-16 h-16 bg-secondary-400"></li>
            <li className="w-16 h-16 bg-secondary-500"></li>
            <li className="w-16 h-16 bg-secondary-600"></li>
            <li className="w-16 h-16 bg-secondary-700"></li>
            <li className="w-16 h-16 bg-secondary-800"></li>
            <li className="w-16 h-16 bg-secondary-900"></li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl">Used (Switch Dark Mode)</h2>
        <div className="flex gap-4">
          <ul>
            <h3 className="mb-2">Primary / Secondary</h3>
            <li className="w-16 h-16 bg-primary"></li>
            <li className="w-16 h-16 bg-secondary"></li>
          </ul>
          <ul>
            <h3 className="mb-2">Surface</h3>
            <li className="w-16 h-16 surface">
              <span className="on-surface">On Surface</span>
            </li>
          </ul>
          <ul>
            <h3 className="mb-2">Error</h3>
            <li className="w-16 h-16 bg-error">
              <span className="on-error">On Error</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-xl">Depth (Recommend Only DarkMode)</h2>
        <div className="flex gap-4">
          <ul>
            <li className="w-16 h-16 dp0"></li>
            <li className="w-16 h-16 dp1"></li>
            <li className="w-16 h-16 dp2"></li>
            <li className="w-16 h-16 dp3"></li>
            <li className="w-16 h-16 dp4"></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
