export default function Form() {
  return (
    <form className="px-4 mt-6">
      <div className="space-y-4 max-w-sm mx-auto">
        <div>
          <label
            htmlFor="email"
            className="mb-2 text-slate-900 font-medium text-sm inline-block"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@readymadeui.com"
            required
            className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-slate-100 w-full border-b-2 border-transparent focus:border-blue-600 outline-none"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="mb-2 text-slate-900 font-medium text-sm inline-block"
          >
            Password
          </label>
          <button
            type="button"
            aria-label="Show password"
            aria-pressed="false"
            className="absolute top-1 right-2 p-0.5 flex cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-[18px] fill-slate-400 overflow-visible"
              viewBox="0 0 128 128"
            >
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-slate-100 w-full border-b-2 border-transparent focus:border-blue-600 outline-none"
          />
        </div>

        <div className="flex items-start">
          <label className="flex items-center group has-[input:checked]:text-slate-900">
            <input
              id="tmc"
              name="tmc"
              type="checkbox"
              required
              className="sr-only"
            />
            {/* Custom box */}
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
              aria-hidden="true"
            >
              {/* Checkmark */}
              <svg
                className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 5l3 3 7-7" />
              </svg>
            </span>
            <span className="ml-3 text-sm text-slate-600">I accept the</span>
          </label>

          <a
            href="#"
            className="ml-1 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Terms and Conditions
          </a>
        </div>

        <button
          type="submit"
          className="!mt-2 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
