
const content = {
  overview: {
    code: "01", label: "Keelo",
    eyebrow: "Keelo / URBTYE",
    title: "Executive operating system",
    intro: "Keelo is an organisation-agnostic executive operating system for persistent state, governed execution and evidence integrity. It sits above operational tools to preserve continuity, authority and repeatable execution.",
    summary: "The durable governance layer that lets an organisation know what is true, who is authorised, what happened, and what happens next.",
    sections: [
      {title:"Persistent state", text:"Keelo maintains the durable operational state of an organisation across people, sessions, vendors and source systems.", bullets:["Canonical organisational context","Versioned decisions and obligations","Recoverable execution state"]},
      {title:"Governed execution", text:"Actions move through explicit authority boundaries rather than ad-hoc operator behaviour.", bullets:["Policy-aware action gates","Deterministic state transitions","Traceable approvals and overrides"]},
      {title:"Evidence integrity", text:"Every governed action is tied to provenance so outcomes can be explained, reconstructed and audited.", bullets:["Evidence lineage","Actor and system attribution","Decision-to-outcome traceability"]},
      {title:"Organisation agnostic", text:"The core does not encode one company's workflow. Urbtye configures organisational instances over neutral primitives.", bullets:["Reusable governance primitives","Organisation-scoped configuration","Adapter-driven integrations"]}
    ]
  },
  what: {
    code:"02", label:"DEFINITION",
    eyebrow:"Keelo / WHAT IT IS",
    title:"What Keelo is",
    intro:"Keelo is the persistent governance and execution layer between organisational intent and the systems that carry it out. It becomes the canonical operational system of record for governed actions.",
    summary:"A system of record for governed operations — not simply a dashboard, workflow builder or data warehouse.",
    sections:[
      {title:"Governance layer",text:"Keelo defines which actions are permissible, under what authority and with what evidence.",bullets:["Explicit authority model","Policy-bound transitions","Controlled exceptions"]},
      {title:"Operational record",text:"It maintains a canonical, organisation-scoped view of decisions, obligations, actions and state.",bullets:["Single governed context","State history","Durable references"]},
      {title:"Execution after verification",text:"An action is executed only after identity, authority, state and evidence requirements are satisfied.",bullets:["Precondition checks","Deterministic execution","Post-action verification"]},
      {title:"Continuity engine",text:"Operational knowledge remains available even as staff, software and interfaces change.",bullets:["Persistent state","Repeatable execution","Reduced key-person dependence"]}
    ]
  },
  core: {
    code:"03", label:"ARCHITECTURE",
    eyebrow:"Keelo / CORE ARCHITECTURE",
    title:"Core Architecture",
    intro:"Keelo separates neutral governance primitives from orchestration, external integrations and organisation-specific context. This keeps the core deterministic and the integration boundary explicit.",
    summary:"Four architectural layers separate invariant governance from runtime behaviour, external systems and each organisation's isolated context.",
    sections:[
      {title:"Core",text:"Neutral governance primitives define the invariant semantics Keelo relies on.",bullets:["Identity and authority","State and transitions","Evidence references","Obligations and decisions"]},
      {title:"Runtime",text:"The runtime orchestrates governed operations and advances state using deterministic transition rules.",bullets:["Command orchestration","Concurrency control","Retries and idempotency","Execution receipts"]},
      {title:"Adapter",text:"Adapters are the only boundary through which Keelo communicates with source and execution systems.",bullets:["Typed interfaces","Input normalisation","Output verification","Failure isolation"]},
      {title:"Organisation Instance",text:"Each organisation operates inside an isolated context containing its policies, state and integration bindings.",bullets:["Tenant isolation","Organisation policies","Scoped credentials","Independent state"]}
    ]
  },
  why: {
    code:"04", label:"PURPOSE",
    eyebrow:"Keelo / WHY IT EXISTS",
    title:"Why it exists",
    intro:"Organisations generate evidence, decisions and obligations faster than ordinary systems can govern them. Keelo preserves continuity and authority across fragmented tools so execution remains controlled and reconstructable.",
    summary:"Keelo exists because execution spans more systems than any one application can safely govern.",
    sections:[
      {title:"Continuity",text:"The organisation should retain its operational memory independently of individual operators or vendor interfaces.",bullets:["Durable organisational state","Cross-system continuity","Recoverable context"]},
      {title:"Authority",text:"Permissions are not enough. Keelo records the authority basis for each governed action.",bullets:["Role and mandate","Delegation chain","Approval evidence"]},
      {title:"Obligations",text:"Commitments and duties become explicit state rather than informal notes buried across systems.",bullets:["Owned obligations","Due-state tracking","Resolution evidence"]},
      {title:"Repeatability",text:"High-value operations can be executed consistently rather than recreated from memory each time.",bullets:["Deterministic pathways","Idempotent commands","Auditable outcomes"]}
    ]
  },
  design: {
    code:"05", label:"DESIGN",
    eyebrow:"Keelo / BY DESIGN",
    title:"By Design",
    intro:"Keelo is intentionally conservative at its core: persistent, traceable, deterministic and isolated by organisation. Those constraints make it safe to coordinate systems that were never designed to share governance.",
    summary:"The design prioritises durable state and explainable execution over convenience shortcuts.",
    sections:[
      {title:"Persistent state",text:"Authoritative state survives processes, sessions and system restarts.",bullets:["Durable storage","Explicit lifecycle","Replayable history"]},
      {title:"Evidence lineage",text:"Inputs, decisions, approvals and outputs remain connected by references.",bullets:["Provenance chain","Tamper-evident records","Source attribution"]},
      {title:"Deterministic execution",text:"Equivalent commands against equivalent state resolve through the same governed path.",bullets:["Stable transition rules","Idempotency controls","Predictable failure modes"]},
      {title:"Isolation & concurrency",text:"Organisation boundaries and concurrent updates are treated as first-class correctness concerns.",bullets:["Organisation isolation","Optimistic/explicit locking","Conflict detection"]}
    ]
  },
  boundaries: {
    code:"06", label:"BOUNDARIES",
    eyebrow:"Keelo / SYSTEM BOUNDARIES",
    title:"System Boundaries",
    intro:"Keelo does not become the business systems it governs. It preserves the governance record and coordinates through adapters, leaving raw source data and domain ownership where they belong.",
    summary:"A narrow core with strict boundaries prevents Keelo from becoming an unmaintainable duplicate of every connected system.",
    sections:[
      {title:"No raw-source ingestion by default",text:"Keelo references and normalises only the evidence required for governance rather than duplicating entire source datasets.",bullets:["Minimal evidence footprint","Reference over replication","Explicit retention rules"]},
      {title:"Does not replace source systems",text:"CRM, finance, HR, project and operational systems remain authoritative for their native domains.",bullets:["Domain ownership preserved","Source-of-truth boundaries","Adapter contracts"]},
      {title:"No organisation business logic in Core",text:"Organisation-specific rules belong in scoped configuration and policies, not in neutral Keelo primitives.",bullets:["Portable core","Configurable policy","Reduced coupling"]},
      {title:"Adapter-only integration boundary",text:"All external effects cross typed adapters so they can be verified, retried, isolated and audited.",bullets:["Controlled side effects","Integration observability","Failure containment"]}
    ]
  }
};

const modal = document.getElementById("modal");
const title = document.getElementById("panelTitle");
const lead = document.getElementById("lead");
const sections = document.getElementById("sections");
const eyebrow = document.getElementById("eyebrow");
const indexCode = document.getElementById("indexCode");
const indexLabel = document.getElementById("indexLabel");
const indexCopy = document.getElementById("indexCopy");
const railCode = document.getElementById("railCode");

let lastTrigger = null;

function openPanel(id, trigger){
  const d = content[id];
  if(!d) return;
  lastTrigger = trigger || null;

  indexCode.textContent = d.code;
  indexLabel.textContent = d.label;
  indexCopy.textContent = d.summary;
  eyebrow.textContent = d.eyebrow;
  title.textContent = d.title;
  lead.textContent = d.intro;
  railCode.textContent = `${d.code} / ${d.label}`;

  sections.innerHTML = d.sections.map((s,i)=>`
    <section class="section-card">
      <div class="num">${String(i+1).padStart(2,"0")} / ${d.code}</div>
      <h2>${s.title}</h2>
      <p>${s.text}</p>
      <ul>${s.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
    </section>
  `).join("");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  setTimeout(()=>document.querySelector(".close").focus(),80);
}

function closePanel(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  if(lastTrigger) lastTrigger.focus();
}

document.querySelectorAll(".hotspot").forEach(btn=>{
  btn.addEventListener("click",()=>openPanel(btn.dataset.id,btn));
});
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closePanel));
document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape" && modal.classList.contains("is-open")) closePanel();
});

const yearEl = document.getElementById("year"); if (yearEl) yearEl.textContent = new Date().getFullYear();
