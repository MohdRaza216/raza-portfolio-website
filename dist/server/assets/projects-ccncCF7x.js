// src/lib/projects.ts
var projects = [...[
	{
		"title": "CourseCompass — Course Recommendation System",
		"description": "A course discovery and recommendation experience with dynamic search, filtering, and structured categorization.",
		"order": 2,
		"tags": [
			"PHP",
			"Laravel",
			"MySQL",
			"JavaScript",
			"AJAX"
		],
		"content": "Engineered course discovery and recommendation workflows with dynamic search,\nfiltering, and structured categorization in a responsive interface.",
		"_meta": {
			"filePath": "coursecompass.md",
			"fileName": "coursecompass.md",
			"directory": ".",
			"extension": "md",
			"path": "coursecompass"
		},
		"image": void 0,
		"html": "<p>Engineered course discovery and recommendation workflows with dynamic search,\nfiltering, and structured categorization in a responsive interface.</p>\n"
	},
	{
		"title": "Growatown — Business Growth Platform",
		"description": "Business listings and customer modules with authentication, CRUD workflows, dashboard tools, and backend query optimization.",
		"order": 4,
		"tags": [
			"Laravel",
			"PHP",
			"MySQL",
			"JavaScript",
			"CRUD"
		],
		"content": "Created business listings and interactive customer modules with authentication,\nCRUD operations, dashboard tools, and backend query optimization.",
		"_meta": {
			"filePath": "growatown.md",
			"fileName": "growatown.md",
			"directory": ".",
			"extension": "md",
			"path": "growatown"
		},
		"image": void 0,
		"html": "<p>Created business listings and interactive customer modules with authentication,\nCRUD operations, dashboard tools, and backend query optimization.</p>\n"
	},
	{
		"title": "Scrap24x7 — Scrap Management Platform",
		"description": "Scrap service management with dedicated admin and customer modules, REST APIs, backend service requests, and a responsive interface.",
		"order": 1,
		"tags": [
			"Laravel",
			"PHP",
			"MySQL",
			"REST APIs",
			"Bootstrap"
		],
		"content": "Developed admin and customer modules for scrap service management, combining\nREST APIs and backend service-request workflows with responsive UI components.",
		"_meta": {
			"filePath": "scrap24x7.md",
			"fileName": "scrap24x7.md",
			"directory": ".",
			"extension": "md",
			"path": "scrap24x7"
		},
		"image": void 0,
		"html": "<p>Developed admin and customer modules for scrap service management, combining\nREST APIs and backend service-request workflows with responsive UI components.</p>\n"
	},
	{
		"title": "Viki Jewellers — E-Commerce Web Application",
		"description": "Customer-facing e-commerce and product management built on secure Laravel architecture and optimized database schemas.",
		"order": 3,
		"tags": [
			"Laravel",
			"PHP",
			"MySQL",
			"HTML",
			"CSS"
		],
		"content": "Built product-management and customer-facing e-commerce workflows using a\nsecure Laravel architecture and optimized database schemas.",
		"_meta": {
			"filePath": "viki-jewellers.md",
			"fileName": "viki-jewellers.md",
			"directory": ".",
			"extension": "md",
			"path": "viki-jewellers"
		},
		"image": void 0,
		"html": "<p>Built product-management and customer-facing e-commerce workflows using a\nsecure Laravel architecture and optimized database schemas.</p>\n"
	}
]].sort((a, b) => a.order - b.order || (b.year ?? 0) - (a.year ?? 0));
var projectId = (project) => project._meta.path;
export { projects as n, projectId as t };
