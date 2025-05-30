import { Graph } from "../../core/model/Graph";
import { SceneGraph } from "../../core/model/SceneGraph";

export const unigraphArchitectureDiagram = () => {
  const graph = new Graph();

  // Core Architectural Components
  graph.createNode({
    id: "Unigraph",
    type: "system",
    tags: ["web-based", "client-side", "story entrypoint"],
  });

  graph.createNode({
    id: "GraphModelLayer",
    type: "core component",
    tags: ["architecture", "backend-independent"],
  });

  graph.createNode({
    id: "SceneAbstractionLayer",
    type: "core component",
    tags: ["architecture", "display configuration"],
  });

  graph.createNode({
    id: "RenderingPipeline",
    type: "core component",
    tags: ["architecture", "visualization"],
  });

  graph.createNode({
    id: "ClientInteractivity",
    type: "core component",
    tags: ["architecture", "user experience"],
  });

  // Model Layer Components
  graph.createNode({
    id: "GraphEngineCore",
    type: "model component",
    tags: ["nodes", "edges", "metadata"],
  });

  graph.createNode({
    id: "CustomProperties",
    type: "model feature",
    tags: ["extensibility"],
  });

  graph.createNode({
    id: "DeclarativeBinding",
    type: "model feature",
    tags: ["data binding"],
  });

  // Scene Layer Components
  graph.createNode({
    id: "MultipleViews",
    type: "scene feature",
    tags: ["visualization", "representation"],
  });

  graph.createNode({
    id: "DisplayConfigurations",
    type: "scene feature",
    tags: ["customization", "presentation"],
  });

  // Rendering Components
  graph.createNode({
    id: "WebGL",
    type: "rendering technology",
    tags: ["visualization", "high-performance"],
  });

  graph.createNode({
    id: "SVG",
    type: "rendering technology",
    tags: ["visualization", "vector graphics"],
  });

  graph.createNode({
    id: "Canvas",
    type: "rendering technology",
    tags: ["visualization", "drawing"],
  });

  // Interaction Components
  graph.createNode({
    id: "DeclarativeAPI",
    type: "interaction feature",
    tags: ["configuration", "user experience"],
  });

  graph.createNode({
    id: "InputMethods",
    type: "interaction feature",
    tags: ["touch", "mouse", "keyboard", "accessibility"],
  });

  // Unigraph Vision Components
  graph.createNode({
    id: "Web3Vision",
    type: "vision pillar",
    tags: ["conceptual", "future"],
  });

  graph.createNode({
    id: "CompositionalCollaboration",
    type: "vision pillar",
    tags: ["conceptual", "collaboration"],
  });

  graph.createNode({
    id: "DecentralizedKnowledge",
    type: "vision pillar",
    tags: ["conceptual", "interoperability"],
  });

  graph.createNode({
    id: "HumanCentricNavigation",
    type: "vision pillar",
    tags: ["conceptual", "user experience"],
  });

  // Use Cases
  graph.createNode({
    id: "SystemDiagrams",
    type: "use case",
    tags: ["application"],
  });

  graph.createNode({
    id: "ScientificGraphs",
    type: "use case",
    tags: ["application"],
  });

  graph.createNode({
    id: "KnowledgeRepresentation",
    type: "use case",
    tags: ["application"],
  });

  graph.createNode({
    id: "SoftwareDevelopment",
    type: "use case",
    tags: ["application"],
  });

  // Additional Graph Engine Components
  graph.createNode({
    id: "NodeStructure",
    type: "engine component",
    tags: ["data structure", "model"],
  });

  graph.createNode({
    id: "EdgeRepository",
    type: "engine component",
    tags: ["data structure", "model"],
  });

  graph.createNode({
    id: "MetadataManager",
    type: "engine component",
    tags: ["data management", "model"],
  });

  graph.createNode({
    id: "GraphTraversal",
    type: "engine capability",
    tags: ["algorithm", "model"],
  });

  graph.createNode({
    id: "QueryEngine",
    type: "engine component",
    tags: ["data retrieval", "model"],
  });

  // Data Management Components
  graph.createNode({
    id: "DataBindingLayer",
    type: "data component",
    tags: ["integration", "model"],
  });

  graph.createNode({
    id: "SerializationEngine",
    type: "data component",
    tags: ["persistence", "model"],
  });

  graph.createNode({
    id: "ImportManager",
    type: "data component",
    tags: ["external data", "model"],
  });

  graph.createNode({
    id: "ExportManager",
    type: "data component",
    tags: ["external data", "model"],
  });

  graph.createNode({
    id: "VersionControl",
    type: "data component",
    tags: ["history", "model"],
  });

  // Scene Management Components
  graph.createNode({
    id: "LayoutEngine",
    type: "scene component",
    tags: ["arrangement", "visualization"],
  });

  graph.createNode({
    id: "FilterEngine",
    type: "scene component",
    tags: ["data filtering", "visualization"],
  });

  graph.createNode({
    id: "ViewportManager",
    type: "scene component",
    tags: ["navigation", "visualization"],
  });

  graph.createNode({
    id: "StyleManager",
    type: "scene component",
    tags: ["appearance", "visualization"],
  });

  graph.createNode({
    id: "ScenePresets",
    type: "scene component",
    tags: ["configuration", "visualization"],
  });

  // Layout Algorithms
  graph.createNode({
    id: "ForceDirectedLayout",
    type: "layout algorithm",
    tags: ["arrangement", "visualization"],
  });

  graph.createNode({
    id: "HierarchicalLayout",
    type: "layout algorithm",
    tags: ["arrangement", "visualization"],
  });

  graph.createNode({
    id: "CircularLayout",
    type: "layout algorithm",
    tags: ["arrangement", "visualization"],
  });

  graph.createNode({
    id: "GridLayout",
    type: "layout algorithm",
    tags: ["arrangement", "visualization"],
  });

  graph.createNode({
    id: "CustomLayout",
    type: "layout algorithm",
    tags: ["arrangement", "visualization"],
  });

  // Interactivity Components
  graph.createNode({
    id: "SelectionManager",
    type: "interaction component",
    tags: ["user interaction", "experience"],
  });

  graph.createNode({
    id: "DragAndDrop",
    type: "interaction component",
    tags: ["user interaction", "experience"],
  });

  graph.createNode({
    id: "ZoomControl",
    type: "interaction component",
    tags: ["navigation", "experience"],
  });

  graph.createNode({
    id: "HistoryManager",
    type: "interaction component",
    tags: ["undo/redo", "experience"],
  });

  graph.createNode({
    id: "ContextMenu",
    type: "interaction component",
    tags: ["user interface", "experience"],
  });

  // Visual Enhancement Components
  graph.createNode({
    id: "AnimationEngine",
    type: "visual component",
    tags: ["motion", "visualization"],
  });

  graph.createNode({
    id: "ThemeManager",
    type: "visual component",
    tags: ["appearance", "visualization"],
  });

  graph.createNode({
    id: "IconsLibrary",
    type: "visual component",
    tags: ["representation", "visualization"],
  });

  graph.createNode({
    id: "TextRenderer",
    type: "visual component",
    tags: ["labels", "visualization"],
  });

  graph.createNode({
    id: "HighlightManager",
    type: "visual component",
    tags: ["focus", "visualization"],
  });

  // Advanced Features
  graph.createNode({
    id: "PatternDetection",
    type: "advanced feature",
    tags: ["analytics", "intelligence"],
  });

  graph.createNode({
    id: "MachineLearning",
    type: "advanced feature",
    tags: ["analytics", "intelligence"],
  });

  graph.createNode({
    id: "Recommendations",
    type: "advanced feature",
    tags: ["analytics", "intelligence"],
  });

  graph.createNode({
    id: "NaturalLanguage",
    type: "advanced feature",
    tags: ["interface", "intelligence"],
  });

  graph.createNode({
    id: "GraphAlgorithms",
    type: "advanced feature",
    tags: ["analytics", "intelligence"],
  });

  // Integration Components
  graph.createNode({
    id: "APILayer",
    type: "integration component",
    tags: ["extensibility", "interface"],
  });

  graph.createNode({
    id: "PluginSystem",
    type: "integration component",
    tags: ["extensibility", "interface"],
  });

  graph.createNode({
    id: "EventSystem",
    type: "integration component",
    tags: ["communication", "interface"],
  });

  graph.createNode({
    id: "DataSourceConnector",
    type: "integration component",
    tags: ["external data", "interface"],
  });

  graph.createNode({
    id: "WebHooks",
    type: "integration component",
    tags: ["automation", "interface"],
  });

  // Specialized Use Cases
  graph.createNode({
    id: "RealTimeCollaboration",
    type: "specialized use case",
    tags: ["collaboration", "application"],
  });

  graph.createNode({
    id: "DataVisualization",
    type: "specialized use case",
    tags: ["analytics", "application"],
  });

  graph.createNode({
    id: "DecisionSupport",
    type: "specialized use case",
    tags: ["business", "application"],
  });

  graph.createNode({
    id: "EducationalTools",
    type: "specialized use case",
    tags: ["learning", "application"],
  });

  graph.createNode({
    id: "ResearchMapping",
    type: "specialized use case",
    tags: ["academia", "application"],
  });

  // Core Architecture Relationships
  graph.createEdge("Unigraph", "GraphModelLayer", { type: "consists of" });
  graph.createEdge("Unigraph", "SceneAbstractionLayer", {
    type: "consists of",
  });
  graph.createEdge("Unigraph", "RenderingPipeline", { type: "consists of" });
  graph.createEdge("Unigraph", "ClientInteractivity", { type: "consists of" });

  // Model Layer Relationships
  graph.createEdge("GraphModelLayer", "GraphEngineCore", {
    type: "implements",
  });
  graph.createEdge("GraphEngineCore", "CustomProperties", { type: "supports" });
  graph.createEdge("GraphEngineCore", "DeclarativeBinding", {
    type: "supports",
  });

  // Additional Graph Engine Relationships
  graph.createEdge("GraphEngineCore", "NodeStructure", { type: "manages" });
  graph.createEdge("GraphEngineCore", "EdgeRepository", { type: "manages" });
  graph.createEdge("GraphEngineCore", "MetadataManager", { type: "utilizes" });
  graph.createEdge("GraphEngineCore", "GraphTraversal", { type: "provides" });
  graph.createEdge("GraphEngineCore", "QueryEngine", { type: "incorporates" });

  // Data Management Relationships
  graph.createEdge("GraphModelLayer", "DataBindingLayer", { type: "utilizes" });
  graph.createEdge("GraphModelLayer", "SerializationEngine", {
    type: "incorporates",
  });
  graph.createEdge("ImportManager", "GraphModelLayer", { type: "populates" });
  graph.createEdge("GraphModelLayer", "ExportManager", { type: "feeds" });
  graph.createEdge("GraphModelLayer", "VersionControl", {
    type: "integrates with",
  });

  // Scene Layer Relationships
  graph.createEdge("SceneAbstractionLayer", "MultipleViews", {
    type: "enables",
  });
  graph.createEdge("SceneAbstractionLayer", "DisplayConfigurations", {
    type: "manages",
  });
  graph.createEdge("GraphModelLayer", "SceneAbstractionLayer", {
    type: "decoupled from",
  });

  // Scene Management Relationships
  graph.createEdge("SceneAbstractionLayer", "LayoutEngine", {
    type: "incorporates",
  });
  graph.createEdge("SceneAbstractionLayer", "FilterEngine", {
    type: "incorporates",
  });
  graph.createEdge("SceneAbstractionLayer", "ViewportManager", {
    type: "incorporates",
  });
  graph.createEdge("SceneAbstractionLayer", "StyleManager", {
    type: "incorporates",
  });
  graph.createEdge("SceneAbstractionLayer", "ScenePresets", {
    type: "manages",
  });

  // Layout Algorithm Relationships
  graph.createEdge("LayoutEngine", "ForceDirectedLayout", {
    type: "implements",
  });
  graph.createEdge("LayoutEngine", "HierarchicalLayout", {
    type: "implements",
  });
  graph.createEdge("LayoutEngine", "CircularLayout", { type: "implements" });
  graph.createEdge("LayoutEngine", "GridLayout", { type: "implements" });
  graph.createEdge("LayoutEngine", "CustomLayout", { type: "supports" });

  // Rendering Relationships
  graph.createEdge("RenderingPipeline", "WebGL", { type: "uses" });
  graph.createEdge("RenderingPipeline", "SVG", { type: "uses" });
  graph.createEdge("RenderingPipeline", "Canvas", { type: "uses" });
  graph.createEdge("SceneAbstractionLayer", "RenderingPipeline", {
    type: "drives",
  });

  // Interaction Relationships
  graph.createEdge("ClientInteractivity", "DeclarativeAPI", {
    type: "provides",
  });
  graph.createEdge("ClientInteractivity", "InputMethods", {
    type: "optimizes for",
  });
  graph.createEdge("RenderingPipeline", "ClientInteractivity", {
    type: "supports",
  });

  // Interactivity Component Relationships
  graph.createEdge("ClientInteractivity", "SelectionManager", {
    type: "includes",
  });
  graph.createEdge("ClientInteractivity", "DragAndDrop", { type: "includes" });
  graph.createEdge("ClientInteractivity", "ZoomControl", { type: "includes" });
  graph.createEdge("ClientInteractivity", "HistoryManager", {
    type: "includes",
  });
  graph.createEdge("ClientInteractivity", "ContextMenu", { type: "includes" });

  // Visual Enhancement Relationships
  graph.createEdge("RenderingPipeline", "AnimationEngine", {
    type: "incorporates",
  });
  graph.createEdge("RenderingPipeline", "ThemeManager", { type: "utilizes" });
  graph.createEdge("RenderingPipeline", "IconsLibrary", { type: "utilizes" });
  graph.createEdge("RenderingPipeline", "TextRenderer", {
    type: "incorporates",
  });
  graph.createEdge("RenderingPipeline", "HighlightManager", {
    type: "incorporates",
  });

  // Vision Relationships
  graph.createEdge("Unigraph", "Web3Vision", { type: "embodies" });
  graph.createEdge("Unigraph", "CompositionalCollaboration", {
    type: "enables",
  });
  graph.createEdge("SceneAbstractionLayer", "CompositionalCollaboration", {
    type: "facilitates",
  });
  graph.createEdge("Unigraph", "DecentralizedKnowledge", { type: "supports" });
  graph.createEdge("ClientInteractivity", "HumanCentricNavigation", {
    type: "provides",
  });

  // Advanced Feature Relationships
  graph.createEdge("Unigraph", "PatternDetection", { type: "supports" });
  graph.createEdge("Unigraph", "MachineLearning", { type: "integrates with" });
  graph.createEdge("MachineLearning", "Recommendations", { type: "enables" });
  graph.createEdge("Unigraph", "NaturalLanguage", { type: "supports" });
  graph.createEdge("GraphEngineCore", "GraphAlgorithms", {
    type: "implements",
  });

  // Integration Component Relationships
  graph.createEdge("Unigraph", "APILayer", { type: "exposes" });
  graph.createEdge("Unigraph", "PluginSystem", { type: "supports" });
  graph.createEdge("Unigraph", "EventSystem", { type: "utilizes" });
  graph.createEdge("Unigraph", "DataSourceConnector", { type: "provides" });
  graph.createEdge("APILayer", "WebHooks", { type: "enables" });

  // Use Case Relationships
  graph.createEdge("Unigraph", "SystemDiagrams", { type: "used for" });
  graph.createEdge("Unigraph", "ScientificGraphs", { type: "used for" });
  graph.createEdge("Unigraph", "KnowledgeRepresentation", { type: "used for" });
  graph.createEdge("Unigraph", "SoftwareDevelopment", { type: "used for" });

  // Specialized Use Case Relationships
  graph.createEdge("Unigraph", "RealTimeCollaboration", { type: "enables" });
  graph.createEdge("Unigraph", "DataVisualization", { type: "powers" });
  graph.createEdge("Unigraph", "DecisionSupport", { type: "facilitates" });
  graph.createEdge("Unigraph", "EducationalTools", { type: "powers" });
  graph.createEdge("Unigraph", "ResearchMapping", { type: "enhances" });

  // Multi-View/Model Relationship
  graph.createEdge("GraphModelLayer", "MultipleViews", {
    type: "can be displayed as",
  });

  // Higher-order vision connections
  graph.createEdge("Web3Vision", "DecentralizedKnowledge", {
    type: "encompasses",
  });
  graph.createEdge("CompositionalCollaboration", "HumanCentricNavigation", {
    type: "enhances",
  });

  // Dynamic graph interactions
  graph.createEdge("SceneAbstractionLayer", "HumanCentricNavigation", {
    type: "enables",
  });
  graph.createEdge("MultipleViews", "KnowledgeRepresentation", {
    type: "enhances",
  });
  graph.createEdge("DisplayConfigurations", "SystemDiagrams", {
    type: "improves",
  });

  // Cross-domain relationships
  graph.createEdge("GraphAlgorithms", "PatternDetection", { type: "powers" });
  graph.createEdge("EventSystem", "RealTimeCollaboration", { type: "enables" });
  graph.createEdge("ThemeManager", "DisplayConfigurations", {
    type: "enhances",
  });
  graph.createEdge("NaturalLanguage", "QueryEngine", {
    type: "interfaces with",
  });
  graph.createEdge("ViewportManager", "ZoomControl", {
    type: "coordinates with",
  });
  graph.createEdge("DataVisualization", "ScientificGraphs", {
    type: "specialized for",
  });
  graph.createEdge("FilterEngine", "DecisionSupport", { type: "empowers" });
  graph.createEdge("RealTimeCollaboration", "CompositionalCollaboration", {
    type: "implements",
  });
  graph.createEdge("PluginSystem", "CustomLayout", { type: "extends through" });
  graph.createEdge("MachineLearning", "ResearchMapping", { type: "enhances" });

  return new SceneGraph({ graph });
};
