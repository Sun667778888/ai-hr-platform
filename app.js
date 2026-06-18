const compensationSampleData = window.compensationAnonymousData || {
  sourceSummary: { files: 0, usableRows: 0 },
  privacy: [],
  salaryBenchmarks: [],
  presets: {},
  insights: {},
};

const modules = {
  home: {
    title: "首页",
    icon: "layout-dashboard",
  },
  compensation: {
    title: "AI薪酬与福利中心",
    short: "覆盖薪酬测算、调薪预算、公平性风险、福利优化和智能问答的重点模块。",
    icon: "wallet-cards",
    tone: "tone-green",
    metric: "8",
    metricLabel: "核心薪酬福利工具",
    routeLabel: "进入薪福",
    featured: true,
    kpis: [
      ["匿名薪酬样例", "8条", "已脱敏", "shield-check", "tone-green"],
      ["调薪预算测算", "150万", "样例口径", "wallet-cards", "tone-amber"],
      ["公平性风险", "1项", "待核查", "scale", "tone-rose"],
      ["福利优化建议", "4条", "可配置", "gift", "tone-blue"],
    ],
    features: [
      {
        title: "薪酬测算助手",
        icon: "calculator",
        desc: "按岗位、职级、城市、学历和工作年限输出市场分位与建议Offer。",
        items: ["SA3专业序列岗位", "上海5-8年", "建议Offer 24K-27K"],
      },
      {
        title: "调薪方案生成",
        icon: "badge-percent",
        desc: "根据年度预算、员工人数和涨薪率自动生成多套调薪方案。",
        items: ["预算150万元", "员工80人", "整体涨薪率8%"],
      },
      {
        title: "薪酬公平性分析",
        icon: "scale",
        desc: "识别同岗不同薪、异常差异和需要核查的薪酬风险。",
        items: ["同序列差异48%", "核查绩效等级", "核查特殊津贴"],
      },
      {
        title: "离职风险预警",
        icon: "radar",
        desc: "结合市场薪酬、调薪历史、绩效和任职时间识别保留风险。",
        items: ["员工A", "市场薪酬偏低28%", "连续两年未调薪"],
      },
      {
        title: "薪酬结构分析",
        icon: "chart-pie",
        desc: "展示人工成本构成、部门成本占比和人均成本。",
        items: ["固定工资67%", "绩效奖金28%", "津贴3%"],
      },
      {
        title: "福利推荐助手",
        icon: "gift",
        desc: "按员工画像推荐福利，同时分析企业福利使用率。",
        items: ["补充医疗险", "子女教育福利", "节假日福利"],
      },
      {
        title: "薪酬沟通助手",
        icon: "message-square-text",
        desc: "将绩效、调薪幅度和员工反馈转成专业沟通话术。",
        items: ["绩效B", "调薪3%", "员工不满意"],
      },
      {
        title: "薪酬数据智能问答",
        icon: "bot-message-square",
        desc: "像ChatGPT一样直接询问人工成本、平均薪资、中位数和预算状态。",
        items: ["成本增长最快部门", "销售平均薪资", "调薪预算是否超标"],
      },
    ],
    bars: [
      ["基本工资", 67, "var(--green)"],
      ["奖金", 28, "var(--amber)"],
      ["补贴", 3, "var(--blue)"],
      ["社保公积金", 1, "var(--teal)"],
      ["福利", 1, "var(--rose)"],
    ],
    donut: {
      center: "150万",
      items: [
        ["调薪预算", 46, "var(--green)"],
        ["保留专项", 24, "var(--blue)"],
        ["绩效激励", 18, "var(--amber)"],
        ["风险预留", 12, "var(--rose)"],
      ],
    },
    table: [
      ["同序列岗位", "薪酬差异48%", "核查职级、绩效与特殊津贴", "高"],
      ["员工A", "市场薪酬偏低28%", "建议进入保留沟通", "高"],
      ["健身补贴", "使用率18%", "建议优化福利预算", "中"],
    ],
  },
  recruiting: {
    title: "招聘效率提升",
    short: "从岗位需求到面试评估的招聘智能化入口。",
    icon: "briefcase-business",
    tone: "tone-teal",
    metric: "37%",
    metricLabel: "招聘周期缩短",
    routeLabel: "进入招聘",
    kpis: [
      ["JD平均生成", "2.6min", "+31%", "file-text", "tone-teal"],
      ["简历初筛通过率", "28%", "+6%", "scan-search", "tone-blue"],
      ["面试题覆盖度", "94%", "+12%", "messages-square", "tone-amber"],
      ["待处理候选人", "46", "-18%", "users", "tone-rose"],
    ],
    features: [
      {
        title: "JD生成",
        icon: "file-pen-line",
        desc: "按岗位族、职级、胜任力模型生成岗位说明书，并可沉淀为模板。",
        items: ["岗位画像完整度 88%", "待完善JD 7份", "常用模板 24套"],
      },
      {
        title: "简历筛选",
        icon: "scan-search",
        desc: "基于硬性条件、经验关键词和胜任力标签进行排序与解释。",
        items: ["本周解析 312份", "推荐进入面试 64人", "风险简历 9份"],
      },
      {
        title: "面试题生成",
        icon: "messages-square",
        desc: "按岗位、面试轮次和能力项生成结构化题库与评分表。",
        items: ["题库命中率 91%", "行为面试题 168道", "技术追问 86道"],
      },
    ],
    bars: [
      ["岗位需求确认", 82, "var(--teal)"],
      ["JD生成", 74, "var(--blue)"],
      ["简历筛选", 69, "var(--amber)"],
      ["面试安排", 58, "var(--rose)"],
    ],
    donut: {
      center: "78%",
      items: [
        ["高匹配候选人", 40, "var(--teal)"],
        ["待复核简历", 25, "var(--blue)"],
        ["需要补充信息", 20, "var(--amber)"],
        ["不匹配", 15, "var(--rose)"],
      ],
    },
    table: [
      ["产品经理", "12", "JD待确认", "今天"],
      ["薪酬绩效专家", "8", "简历筛选中", "明天"],
      ["数据分析师", "26", "面试题已生成", "周五"],
    ],
  },
  service: {
    title: "员工服务中心",
    short: "围绕政策、流程与个人事项的自助服务入口。",
    icon: "handshake",
    tone: "tone-blue",
    metric: "92%",
    metricLabel: "员工自助解决率",
    routeLabel: "进入服务",
    kpis: [
      ["制度问答命中率", "93%", "+5%", "circle-help", "tone-blue"],
      ["流程指引完成率", "88%", "+9%", "list-checks", "tone-teal"],
      ["平均响应时间", "19s", "-42%", "timer", "tone-amber"],
      ["待更新政策", "11", "-3", "refresh-cw", "tone-rose"],
    ],
    features: [
      {
        title: "制度问答",
        icon: "circle-help",
        desc: "按员工问题自动匹配制度条款，输出可追溯答案和引用来源。",
        items: ["综合保险", "年终奖税优", "人才服务", "个税申报", "企业年金"],
      },
      {
        title: "流程指引",
        icon: "route",
        desc: "把复杂流程拆成节点、材料清单和责任人，便于员工一步步办理。",
        items: ["材料清单覆盖 95%", "流程平均5步", "跨部门事项 8类"],
      },
    ],
    serviceTopics: [
      ["综合保险", "参保、报销、补充医疗材料"],
      ["年终奖税优", "计税口径、申报节点、测算说明"],
      ["人才服务", "落户、居住证、人才补贴"],
      ["个税申报", "专项附加扣除、汇算清缴"],
      ["企业年金", "加入条件、账户查询、领取规则"],
    ],
    bars: [
      ["综合保险", 91, "var(--blue)"],
      ["年终奖税优", 77, "var(--amber)"],
      ["人才服务", 72, "var(--teal)"],
      ["个税申报", 84, "var(--green)"],
      ["企业年金", 66, "var(--rose)"],
    ],
    donut: {
      center: "92%",
      items: [
        ["自助解决", 52, "var(--teal)"],
        ["人工转接", 18, "var(--blue)"],
        ["资料待补", 17, "var(--amber)"],
        ["政策待更新", 13, "var(--rose)"],
      ],
    },
    table: [
      ["综合保险", "报销材料缺失", "需更新FAQ", "2天"],
      ["个税申报", "专项扣除咨询", "已配置流程", "今天"],
      ["企业年金", "账户转移", "待政策复核", "3天"],
    ],
  },
  development: {
    title: "人才发展中心",
    short: "把培训、测评与成长路径串联成可执行的人才发展闭环。",
    icon: "sparkles",
    tone: "tone-amber",
    metric: "86%",
    metricLabel: "成长计划覆盖率",
    routeLabel: "进入发展",
    kpis: [
      ["培训推荐采纳率", "71%", "+14%", "graduation-cap", "tone-amber"],
      ["能力评估完成率", "86%", "+8%", "chart-no-axes-combined", "tone-teal"],
      ["成长计划进行中", "128", "+22", "map", "tone-blue"],
      ["关键岗位继任", "64%", "+7%", "network", "tone-rose"],
    ],
    features: [
      {
        title: "培训推荐",
        icon: "graduation-cap",
        desc: "按岗位序列、绩效结果、技能缺口推荐课程与学习路径。",
        items: ["推荐课程 42门", "必修完成率 83%", "学习反馈 4.7分"],
      },
      {
        title: "能力评估",
        icon: "chart-no-axes-combined",
        desc: "结合自评、主管评价和项目表现输出能力雷达与短板说明。",
        items: ["已完成评估 286人", "关键能力项 18个", "待校准 24人"],
      },
      {
        title: "成长计划",
        icon: "map",
        desc: "生成阶段目标、行动任务、导师建议与复盘节点。",
        items: ["计划进行中 128份", "导师匹配 62组", "逾期任务 13项"],
      },
    ],
    bars: [
      ["领导力", 76, "var(--amber)"],
      ["专业技能", 84, "var(--teal)"],
      ["项目管理", 62, "var(--blue)"],
      ["协作影响", 70, "var(--rose)"],
    ],
    donut: {
      center: "86%",
      items: [
        ["成长计划中", 44, "var(--teal)"],
        ["待主管确认", 24, "var(--blue)"],
        ["需补充测评", 18, "var(--amber)"],
        ["暂停跟进", 14, "var(--rose)"],
      ],
    },
    table: [
      ["销售管理梯队", "领导力", "推荐训练营", "高"],
      ["研发序列P5", "架构能力", "安排导师", "中"],
      ["HRBP团队", "业务洞察", "项目复盘", "中"],
    ],
  },
  decision: {
    title: "管理决策看板",
    short: "沉淀人力数据、风险提醒和AI洞察，支持管理层快速判断。",
    icon: "chart-column-big",
    tone: "tone-rose",
    metric: "14",
    metricLabel: "本周关键洞察",
    routeLabel: "进入看板",
    kpis: [
      ["人力数据指标", "32项", "+4", "database", "tone-blue"],
      ["风险提醒", "9条", "-5", "triangle-alert", "tone-rose"],
      ["AI洞察", "14条", "+6", "brain", "tone-teal"],
      ["预算偏差", "3.8%", "-1.2%", "wallet-cards", "tone-amber"],
    ],
    features: [
      {
        title: "人力数据",
        icon: "database",
        desc: "查看编制、流动、招聘、成本、绩效等核心人力指标。",
        items: ["核心指标 32项", "月度趋势 12期", "部门拆解 9个"],
      },
      {
        title: "风险提醒",
        icon: "triangle-alert",
        desc: "识别离职风险、用工合规、成本异常和关键岗位空缺。",
        items: ["高风险 3项", "中风险 6项", "已关闭 18项"],
      },
      {
        title: "AI洞察",
        icon: "brain",
        desc: "把数据变化转成管理语言，输出原因推断和行动建议。",
        items: ["洞察 14条", "建议动作 21个", "待确认 5条"],
      },
    ],
    bars: [
      ["组织健康", 81, "var(--teal)"],
      ["人员稳定", 68, "var(--blue)"],
      ["成本效率", 74, "var(--amber)"],
      ["合规安全", 89, "var(--green)"],
    ],
    donut: {
      center: "9",
      items: [
        ["离职风险", 32, "var(--rose)"],
        ["成本异常", 24, "var(--amber)"],
        ["编制缺口", 26, "var(--blue)"],
        ["合规待查", 18, "var(--teal)"],
      ],
    },
    table: [
      ["研发中心", "关键岗位空缺", "建议提前启动招聘", "高"],
      ["销售一区", "离职风险上升", "建议访谈复盘", "高"],
      ["职能平台", "人均成本偏高", "建议预算校准", "中"],
    ],
  },
};

const moduleOrder = ["compensation", "recruiting", "service", "development", "decision"];
const docState = JSON.parse(localStorage.getItem("hrDocState") || "{}");
const serviceKnowledge = window.employeeServiceKnowledge || { categories: [], sources: {}, faqs: [], verifiedAt: "未配置" };
const recruitingKnowledge = window.recruitingKnowledge || { roles: [], candidates: [], images: [], interviewQuestionBank: {}, importedAt: "未导入" };

function saveDocState() {
  localStorage.setItem("hrDocState", JSON.stringify(docState));
}

function formatSize(bytes) {
  if (!bytes) return "资料记录";
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function navigate(route) {
  window.location.hash = route === "home" ? "" : route;
}

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  return modules[route] ? route : "home";
}

function renderNav(activeRoute) {
  const nav = document.querySelector("#mainNav");
  nav.innerHTML = [
    `<button class="nav-item ${activeRoute === "home" ? "is-active" : ""}" data-route="home">${icon("layout-dashboard")}<span>首页</span></button>`,
    ...moduleOrder.map((key) => {
      const item = modules[key];
      return `<button class="nav-item ${activeRoute === key ? "is-active" : ""}" data-route="${key}">${icon(item.icon)}<span>${item.title}</span></button>`;
    }),
  ].join("");
}

function renderHome() {
  const cards = moduleOrder.map((key) => {
    const item = modules[key];
    return `
      <article class="entry-card ${item.featured ? "is-featured" : ""}">
        <div class="entry-head">
          <span class="entry-icon ${item.tone}">${icon(item.icon)}</span>
          <span class="section-label">${item.featured ? "重点入口" : "入口"}</span>
        </div>
        <div>
          <h2>${item.title}</h2>
          <p>${item.short}</p>
        </div>
        <div class="feature-list">
          ${item.features.map((feature) => `<span class="feature-pill">${feature.title}</span>`).join("")}
        </div>
        <footer>
          <div class="entry-metric">
            <strong>${item.metric}</strong>
            <span>${item.metricLabel}</span>
          </div>
          <button class="entry-button" data-route="${key}">
            ${item.routeLabel}
            ${icon("arrow-right")}
          </button>
        </footer>
      </article>
    `;
  });

  return `
    <section class="home-grid">${cards.join("")}</section>
    ${renderHomeDashboard()}
    ${renderDocCenter("home", "首页资料库", "上传通用制度、组织架构、人员名单或年度人力规划资料。")}
  `;
}

function renderHomeDashboard() {
  return `
    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">全局可视化看板</span>
          <h2>HR工作状态总览</h2>
          <p>集中展示四个入口的效率、服务、发展与决策状态。</p>
        </div>
      </div>
      <div class="metric-grid">
        ${moduleOrder
          .map((key) => {
            const item = modules[key];
            return `
              <article class="metric-card">
                <header>
                  <span>${item.title}</span>
                  <span class="metric-icon ${item.tone}">${icon(item.icon)}</span>
                </header>
                <strong>${item.metric}</strong>
                <span class="metric-trend">${item.metricLabel}</span>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderModule(route) {
  const item = modules[route];
  if (route === "compensation") {
    return renderCompensationModule(item);
  }
  if (route === "service") {
    return renderServiceModule(item);
  }
  if (route === "recruiting") {
    return renderRecruitingModule(item);
  }
  if (route === "development") {
    return renderDevelopmentModule(item);
  }
  if (route === "decision") {
    return renderDecisionModule(item);
  }

  return `
    <section class="module-hero">
      <div class="module-summary">
        <div>
          <span class="eyebrow">模块入口</span>
          <h2>${item.title}</h2>
        </div>
        <p>${item.short}</p>
        <div class="module-actions">
          <button class="primary-button" data-scroll-target="tools">${icon("wand-sparkles")}查看功能</button>
          <button class="secondary-button" data-scroll-target="documents">${icon("upload-cloud")}上传资料</button>
        </div>
      </div>
      <div class="metric-grid module-metrics">
        ${item.kpis
          .map(
            ([label, value, trend, iconName, tone]) => `
              <article class="metric-card">
                <header>
                  <span>${label}</span>
                  <span class="metric-icon ${tone}">${icon(iconName)}</span>
                </header>
                <strong>${value}</strong>
                <span class="metric-trend">${trend}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="dashboard-grid">
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">可视化看板</span>
            <h2>${item.title}进度</h2>
          </div>
        </div>
        ${renderBars(item.bars)}
      </div>
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">结构分布</span>
            <h2>当前事项分布</h2>
          </div>
        </div>
        ${renderDonut(item.donut)}
      </div>
    </section>

    <section class="section-band" id="tools">
      <div class="section-title">
        <div>
          <span class="section-label">业务功能</span>
          <h2>${item.title}功能区</h2>
          <p>每个功能都配有状态指标，方便HR跟进执行情况。</p>
        </div>
      </div>
      ${route === "service" ? renderServiceTools(item) : renderToolCards(item.features)}
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">待办与洞察</span>
          <h2>近期重点事项</h2>
        </div>
      </div>
      ${renderTable(item.table)}
    </section>

    ${renderDocCenter(route, `${item.title}资料库`, "上传或更新该模块使用的制度、模板、流程说明、数据表和评估材料。")}
  `;
}

function renderRecruitingModule(item) {
  const firstRole = recruitingKnowledge.roles[0];
  return `
    <section class="recruiting-hero">
      <div class="recruiting-hero-main">
        <span class="eyebrow">招聘效率工作台</span>
        <h2>${item.title}</h2>
        <p>基于你提供的真实JD样例，沉淀岗位模板、能力标签、简历筛选要点和结构化面试题。</p>
        <div class="recruiting-proof-row">
          <span>${recruitingKnowledge.roles.length}个JD模板</span>
          <span>${new Set(recruitingKnowledge.roles.map((role) => role.family)).size}类岗位族</span>
          <span>${recruitingKnowledge.images.length}张参考截图</span>
          <span>导入日期 ${recruitingKnowledge.importedAt}</span>
        </div>
      </div>
      <div class="recruiting-hero-board">
        <span class="section-label">JD质量评分</span>
        <strong>91</strong>
        <div class="health-meter" aria-hidden="true">
          <span style="--meter-width:91%"></span>
        </div>
        <p>岗位职责、任职要求、福利标签和面试关注点已结构化，可直接复用。</p>
      </div>
    </section>

    <section class="metric-grid">
      ${item.kpis
        .map(
          ([label, value, trend, iconName, tone]) => `
            <article class="metric-card">
              <header>
                <span>${label}</span>
                <span class="metric-icon ${tone}">${icon(iconName)}</span>
              </header>
              <strong>${value}</strong>
              <span class="metric-trend">${trend}</span>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="section-band" id="jdGenerator">
      <div class="section-title">
        <div>
          <span class="section-label">JD生成</span>
          <h2>AI JD生成助手</h2>
          <p>选择参考岗位后，自动生成更规范的招聘JD，可用于Boss直聘、内推或招聘官网。</p>
        </div>
      </div>
      ${renderJdGenerator(firstRole)}
    </section>

    <section class="dashboard-grid">
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">招聘流程看板</span>
            <h2>效率提升进度</h2>
          </div>
        </div>
        ${renderBars(item.bars)}
      </div>
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">候选人结构</span>
            <h2>简历处理分布</h2>
          </div>
        </div>
        ${renderDonut(item.donut)}
      </div>
    </section>

    <section class="section-band" id="resumeScreening">
      <div class="section-title">
        <div>
          <span class="section-label">简历筛选</span>
          <h2>候选人匹配与风险提示</h2>
          <p>按岗位职责、硬性要求和面试关注点，输出匹配度、亮点、风险和下一步建议。</p>
        </div>
      </div>
      ${renderResumeScreening()}
    </section>

    <section class="section-band" id="interviewQuestions">
      <div class="section-title">
        <div>
          <span class="section-label">面试题生成</span>
          <h2>结构化面试题库</h2>
          <p>按岗位族生成行为题、场景题和追问题，帮助面试官统一评估口径。</p>
        </div>
      </div>
      ${renderInterviewGenerator(firstRole)}
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">JD样例库</span>
          <h2>已导入参考岗位</h2>
          <p>这些岗位来自你提供的截图，后续可继续作为JD生成和简历筛选的训练样例。</p>
        </div>
      </div>
      ${renderRecruitingTemplateLibrary()}
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">待办与洞察</span>
          <h2>近期重点事项</h2>
        </div>
      </div>
      ${renderTable(item.table)}
    </section>

    ${renderDocCenter("recruiting", "招聘效率提升资料库", "上传或更新JD模板、候选人简历、面试题库、招聘SOP和渠道数据。")}
  `;
}

function renderJdGenerator(role) {
  if (!role) return `<p class="empty-note">暂无JD模板，请先上传参考JD资料。</p>`;
  return `
    <div class="recruiting-workbench">
      <div class="jd-form-panel">
        <div class="recruiting-tabs">
          ${recruitingKnowledge.roles
            .slice(0, 6)
            .map((entry, index) => `<button class="tab-button ${entry.id === role.id || index === 0 ? "is-active" : ""}" data-role-template="${entry.id}">${entry.title}</button>`)
            .join("")}
        </div>
        <div class="jd-input-grid">
          <label><span>岗位名称</span><input id="jdTitleInput" value="${role.title}" /></label>
          <label><span>岗位族</span><input id="jdFamilyInput" value="${role.family}" /></label>
          <label><span>城市</span><input id="jdCityInput" value="${role.city}" /></label>
          <label><span>薪资范围</span><input id="jdSalaryInput" value="${role.salary}" /></label>
          <label><span>学历要求</span><input id="jdEducationInput" value="${role.id === "business-intelligence-intern" ? "本科及以上在校生" : role.id === "it-support" ? "本科及以上" : "大专及以上优先"}" /></label>
          <label><span>经验要求</span><input id="jdExperienceInput" value="${role.id === "live-streaming-bd" ? "3年以上相关经验" : role.id === "it-support" ? "3年以上技术支持经验" : "经验不限/相关经验优先"}" /></label>
        </div>
        <textarea id="jdExtraInput" placeholder="补充招聘口径，例如：每周到岗天数、轮班要求、提成方式、是否接受应届生。">${role.tags.join("、")}</textarea>
        <div class="qa-action-row">
          <button class="primary-button" id="generateJdButton">${icon("sparkles")}生成JD</button>
          <button class="secondary-button" data-scroll-target="documents">${icon("upload-cloud")}上传JD资料</button>
        </div>
      </div>
      <div class="jd-output-panel" id="jdOutput">
        ${renderGeneratedJd(role)}
      </div>
    </div>
  `;
}

function renderGeneratedJd(role) {
  const title = document.querySelector("#jdTitleInput")?.value || role.title;
  const family = document.querySelector("#jdFamilyInput")?.value || role.family;
  const city = document.querySelector("#jdCityInput")?.value || role.city;
  const salary = document.querySelector("#jdSalaryInput")?.value || role.salary;
  const extra = document.querySelector("#jdExtraInput")?.value || role.tags.join("、");
  return `
    <article class="generated-jd">
      <div class="qa-answer-head">
        <div>
          <span class="section-label">AI生成JD</span>
          <h3>${title}</h3>
        </div>
        <span class="status-tag">质量评分91</span>
      </div>
      <div class="jd-meta-row">
        <span>${family}</span>
        <span>${city}</span>
        <span>${salary}</span>
      </div>
      <div class="answer-block">
        <span class="section-label">岗位职责</span>
        <ul>${role.responsibilities.map((line) => `<li>${line}</li>`).join("")}</ul>
      </div>
      <div class="answer-block">
        <span class="section-label">任职要求</span>
        <ul>${role.requirements.map((line) => `<li>${line}</li>`).join("")}</ul>
      </div>
      <div class="jd-tag-list">
        ${[...role.tags, ...role.benefits.slice(0, 4), ...extra.split(/[、,，]/).filter(Boolean).slice(0, 4)]
          .slice(0, 12)
          .map((tag) => `<span>${tag}</span>`)
          .join("")}
      </div>
      <p class="source-note">可直接复制到招聘渠道；发布前建议HR补充公司介绍、工作时间、薪资结构和合规口径。</p>
    </article>
  `;
}

function renderResumeScreening() {
  return `
    <div class="screening-layout">
      <div class="screening-upload">
        <span class="entry-icon tone-teal">${icon("scan-search")}</span>
        <h3>上传简历并匹配JD</h3>
        <p>上传后会先做本地模拟筛选：读取文件名、数量和当前JD标签，生成匹配度、亮点、风险和下一步建议。</p>
        <input id="resumeUploadInput" type="file" multiple accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" />
        <div class="screening-file-status" id="resumeUploadStatus">${renderResumeUploadInitialStatus()}</div>
        <button class="secondary-button" id="screenResumeButton">${icon("list-checks")}模拟筛选</button>
      </div>
      <div class="candidate-grid" id="candidateGrid">
        ${recruitingKnowledge.candidates.map((candidate) => renderCandidateCard(candidate)).join("")}
      </div>
    </div>
  `;
}

function renderCandidateCard(candidate) {
  const targetRole = escapeHtml(candidate.targetRole);
  const name = escapeHtml(candidate.name);
  const profile = escapeHtml(candidate.profile);
  const highlights = (candidate.highlights || []).map((item) => escapeHtml(item));
  const risks = (candidate.risks || []).map((item) => escapeHtml(item));
  const suggestion = escapeHtml(candidate.suggestion);
  return `
    <article class="candidate-card">
      <header>
        <div>
          <span class="section-label">${targetRole}</span>
          <h3>${name}</h3>
        </div>
        <strong>${candidate.score}</strong>
      </header>
      <p>${profile}</p>
      <div class="candidate-tags">
        ${highlights.map((item) => `<span>${item}</span>`).join("")}
      </div>
      <div class="candidate-risk">
        <span>风险提示</span>
        <p>${risks.join("；")}</p>
      </div>
      <p class="source-note">${suggestion}</p>
    </article>
  `;
}

function renderInterviewGenerator(role) {
  const roles = recruitingKnowledge.roles;
  return `
    <div class="interview-layout">
      <div class="interview-control">
        <label>
          <span>选择岗位</span>
          <select id="interviewRoleSelect">
            ${roles.map((entry) => `<option value="${entry.id}" ${entry.id === role.id ? "selected" : ""}>${entry.title}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>面试轮次</span>
          <select id="interviewStageSelect">
            <option>HR初筛</option>
            <option selected>业务一面</option>
            <option>终面</option>
          </select>
        </label>
        <button class="primary-button" id="generateQuestionsButton">${icon("messages-square")}生成面试题</button>
      </div>
      <div class="interview-output" id="interviewOutput">
        ${renderInterviewQuestions(role)}
      </div>
    </div>
  `;
}

function renderInterviewQuestions(role) {
  const questions = recruitingKnowledge.interviewQuestionBank[role.family] || role.interviewFocus.map((item) => `请举例说明你在${item}方面的经验。`);
  return `
    <div class="question-card-grid">
      ${questions
        .map(
          (question, index) => `
            <article class="question-card">
              <span class="section-label">问题${index + 1}</span>
              <h3>${question}</h3>
              <p>追问方向：${role.interviewFocus[index % role.interviewFocus.length]}、真实案例、量化结果、复盘改进。</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderRecruitingTemplateLibrary() {
  return `
    <div class="recruiting-template-grid">
      ${recruitingKnowledge.roles
        .map(
          (role, index) => `
            <article class="recruiting-template-card">
              <header>
                <span class="entry-icon tone-teal">${icon(index % 2 ? "briefcase-business" : "file-text")}</span>
                <span class="status-tag">${role.family}</span>
              </header>
              <h3>${role.title}</h3>
              <p>${role.responsibilities[0]}</p>
              <div class="candidate-tags">
                ${role.tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}
              </div>
              <a href="${recruitingKnowledge.images[index]}" target="_blank" rel="noreferrer">查看原始截图 ${icon("arrow-up-right")}</a>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDevelopmentModule(item) {
  return `
    <section class="talent-hero">
      <div class="talent-hero-main">
        <span class="eyebrow">人才发展工作台</span>
        <h2>${item.title}</h2>
        <p>HR可以输入员工画像、能力短板和发展目标，生成培训推荐、能力评估和成长计划。</p>
        <div class="recruiting-proof-row">
          <span>培训推荐可填写</span>
          <span>能力评估可填写</span>
          <span>成长计划可填写</span>
        </div>
      </div>
      <div class="talent-hero-board">
        <span class="section-label">发展计划成熟度</span>
        <strong>86</strong>
        <div class="health-meter" aria-hidden="true">
          <span style="--meter-width:86%"></span>
        </div>
        <p>建议结合岗位序列、绩效等级、能力短板和业务目标动态生成发展方案。</p>
      </div>
    </section>

    <section class="metric-grid">
      ${item.kpis
        .map(
          ([label, value, trend, iconName, tone]) => `
            <article class="metric-card">
              <header>
                <span>${label}</span>
                <span class="metric-icon ${tone}">${icon(iconName)}</span>
              </header>
              <strong>${value}</strong>
              <span class="metric-trend">${trend}</span>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="dashboard-grid">
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">可视化看板</span>
            <h2>能力发展进度</h2>
          </div>
        </div>
        ${renderBars(item.bars)}
      </div>
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">成长计划分布</span>
            <h2>当前事项分布</h2>
          </div>
        </div>
        ${renderDonut(item.donut)}
      </div>
    </section>

    <section class="section-band" id="developmentWorkbench">
      <div class="section-title">
        <div>
          <span class="section-label">可填写工作台</span>
          <h2>人才发展三件套</h2>
          <p>根据输入内容生成课程、评估结果和阶段性成长任务。</p>
        </div>
      </div>
      <div class="development-grid">
        ${renderTrainingRecommendation()}
        ${renderCapabilityAssessment()}
        ${renderGrowthPlan()}
      </div>
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">待办与洞察</span>
          <h2>近期重点事项</h2>
        </div>
      </div>
      ${renderTable(item.table)}
    </section>

    ${renderDocCenter("development", "人才发展中心资料库", "上传或更新课程库、能力模型、评估表、导师名单和成长计划模板。")}
  `;
}

function renderTrainingRecommendation() {
  return `
    <article class="interactive-panel">
      <header>
        <span class="entry-icon tone-amber">${icon("graduation-cap")}</span>
        <div>
          <span class="section-label">培训推荐</span>
          <h3>培训推荐助手</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>员工姓名</span><input id="trainNameInput" value="王某某" /></label>
        <label><span>岗位/序列</span><input id="trainRoleInput" value="销售主管" /></label>
        <label><span>能力短板</span><input id="trainGapInput" value="团队管理、业务复盘" /></label>
        <label><span>绩效等级</span><input id="trainPerformanceInput" value="B+" /></label>
        <label><span>每周学习时长/h</span><input id="trainHoursInput" type="number" value="3" /></label>
        <button class="primary-button comp-action-button" data-dev-action="training">${icon("sparkles")}生成推荐</button>
      </div>
      <div id="trainingOutput">${renderTrainingOutput({ name: "王某某", role: "销售主管", gap: "团队管理、业务复盘", performance: "B+", hours: 3 })}</div>
    </article>
  `;
}

function renderCapabilityAssessment() {
  return `
    <article class="interactive-panel">
      <header>
        <span class="entry-icon tone-teal">${icon("chart-no-axes-combined")}</span>
        <div>
          <span class="section-label">能力评估</span>
          <h3>能力评估助手</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>员工姓名</span><input id="assessNameInput" value="李某某" /></label>
        <label><span>目标岗位</span><input id="assessRoleInput" value="产品经理P6" /></label>
        <label><span>专业能力/分</span><input id="assessSkillInput" type="number" value="78" /></label>
        <label><span>协作影响/分</span><input id="assessCollabInput" type="number" value="72" /></label>
        <label><span>项目管理/分</span><input id="assessProjectInput" type="number" value="64" /></label>
        <label><span>领导潜力/分</span><input id="assessLeadInput" type="number" value="69" /></label>
        <button class="primary-button comp-action-button" data-dev-action="assessment">${icon("clipboard-check")}生成评估</button>
      </div>
      <div id="assessmentOutput">${renderAssessmentOutput({ name: "李某某", role: "产品经理P6", skill: 78, collab: 72, project: 64, lead: 69 })}</div>
    </article>
  `;
}

function renderGrowthPlan() {
  return `
    <article class="interactive-panel interactive-panel-wide">
      <header>
        <span class="entry-icon tone-blue">${icon("map")}</span>
        <div>
          <span class="section-label">成长计划</span>
          <h3>成长计划生成器</h3>
        </div>
      </header>
      <div class="comp-form-row">
        <label><span>员工姓名</span><input id="growthNameInput" value="陈某某" /></label>
        <label><span>当前岗位</span><input id="growthCurrentInput" value="HRBP" /></label>
        <label><span>目标岗位</span><input id="growthTargetInput" value="高级HRBP" /></label>
        <label><span>周期/月</span><input id="growthMonthsInput" type="number" value="6" /></label>
        <label><span>导师</span><input id="growthMentorInput" value="业务负责人+HRD" /></label>
        <label><span>重点任务</span><input id="growthFocusInput" value="业务洞察、组织诊断、管理层汇报" /></label>
        <button class="primary-button comp-action-button" data-dev-action="growth">${icon("map")}生成计划</button>
      </div>
      <div id="growthOutput">${renderGrowthOutput({ name: "陈某某", current: "HRBP", target: "高级HRBP", months: 6, mentor: "业务负责人+HRD", focus: "业务洞察、组织诊断、管理层汇报" })}</div>
    </article>
  `;
}

function renderTrainingOutput({ name, role, gap, performance, hours }) {
  const weeklyHours = Math.max(1, toNumber(hours, 3));
  const gapList = String(gap).split(/[、,，]/).filter(Boolean).slice(0, 4);
  return `
    <div class="profile-box">
      <span>培训对象</span>
      <strong>${name} · ${role} · 绩效${performance}</strong>
    </div>
    <div class="value-tags">
      ${gapList.map((item) => `<span>${item}提升</span>`).join("")}
      <span>每周${weeklyHours}h</span>
    </div>
    <div class="plan-grid">
      <div class="plan-card"><strong>第1阶段</strong><span>完成岗位核心能力课程，聚焦${gapList[0] || "关键能力"}。</span><em>建议周期：2周</em></div>
      <div class="plan-card"><strong>第2阶段</strong><span>安排业务案例复盘和导师点评，形成行动清单。</span><em>建议周期：3周</em></div>
      <div class="plan-card"><strong>第3阶段</strong><span>参与真实项目演练，并用结果数据复盘。</span><em>建议周期：4周</em></div>
    </div>
  `;
}

function renderAssessmentOutput({ name, role, skill, collab, project, lead }) {
  const rows = [
    ["专业能力", clampNumber(toNumber(skill, 78), 0, 100), "var(--teal)"],
    ["协作影响", clampNumber(toNumber(collab, 72), 0, 100), "var(--blue)"],
    ["项目管理", clampNumber(toNumber(project, 64), 0, 100), "var(--amber)"],
    ["领导潜力", clampNumber(toNumber(lead, 69), 0, 100), "var(--rose)"],
  ];
  const average = Math.round(rows.reduce((sum, row) => sum + row[1], 0) / rows.length);
  const weakest = rows.slice().sort((a, b) => a[1] - b[1])[0][0];
  return `
    <div class="profile-box">
      <span>评估对象</span>
      <strong>${name} · ${role} · 综合${average}分</strong>
    </div>
    ${renderMiniBars(rows)}
    <div class="script-box">当前最需要提升的是“${weakest}”。建议将下一阶段任务设计为可量化项目，并在月度复盘中追踪行为变化。</div>
  `;
}

function renderGrowthOutput({ name, current, target, months, mentor, focus }) {
  const safeMonths = Math.max(1, toNumber(months, 6));
  return `
    <div class="profile-box">
      <span>成长对象</span>
      <strong>${name} · ${current} → ${target}</strong>
    </div>
    <div class="plan-grid">
      <div class="plan-card"><strong>0-${Math.ceil(safeMonths / 3)}月</strong><span>明确目标能力和评估口径，完成基础学习与影子跟岗。</span><em>导师：${mentor}</em></div>
      <div class="plan-card"><strong>中期推进</strong><span>围绕${focus}设计项目任务，输出阶段成果。</span><em>每月复盘一次</em></div>
      <div class="plan-card"><strong>结项评估</strong><span>用业务结果、主管反馈和能力评分判断是否进入下一职级准备池。</span><em>周期：${safeMonths}个月</em></div>
    </div>
  `;
}

function renderDecisionModule(item) {
  return `
    <section class="decision-hero">
      <div class="decision-hero-main">
        <span class="eyebrow">管理决策工作台</span>
        <h2>${item.title}</h2>
        <p>输入组织、人力成本、流动、编制和合规数据，自动生成管理风险提醒和AI洞察。</p>
        <div class="recruiting-proof-row">
          <span>人力数据可填写</span>
          <span>风险提醒可填写</span>
          <span>AI洞察可提问</span>
        </div>
      </div>
      <div class="decision-hero-board">
        <span class="section-label">管理关注指数</span>
        <strong>81</strong>
        <div class="health-meter" aria-hidden="true">
          <span style="--meter-width:81%"></span>
        </div>
        <p>建议每月更新核心指标，形成组织健康、成本效率和风险闭环。</p>
      </div>
    </section>

    <section class="metric-grid">
      ${item.kpis
        .map(
          ([label, value, trend, iconName, tone]) => `
            <article class="metric-card">
              <header>
                <span>${label}</span>
                <span class="metric-icon ${tone}">${icon(iconName)}</span>
              </header>
              <strong>${value}</strong>
              <span class="metric-trend">${trend}</span>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="dashboard-grid">
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">可视化看板</span>
            <h2>组织健康指标</h2>
          </div>
        </div>
        ${renderBars(item.bars)}
      </div>
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">风险结构</span>
            <h2>当前风险分布</h2>
          </div>
        </div>
        ${renderDonut(item.donut)}
      </div>
    </section>

    <section class="section-band" id="decisionWorkbench">
      <div class="section-title">
        <div>
          <span class="section-label">可填写工作台</span>
          <h2>管理决策三件套</h2>
          <p>输入关键指标，生成数据摘要、风险提醒和AI管理洞察。</p>
        </div>
      </div>
      <div class="development-grid">
        ${renderHrDataInput()}
        ${renderRiskInput()}
        ${renderDecisionInsightInput()}
      </div>
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">待办与洞察</span>
          <h2>近期重点事项</h2>
        </div>
      </div>
      ${renderTable(item.table)}
    </section>

    ${renderDocCenter("decision", "管理决策看板资料库", "上传或更新人员花名册、编制表、离职数据、预算表、绩效数据和风险台账。")}
  `;
}

function renderHrDataInput() {
  return `
    <article class="interactive-panel">
      <header>
        <span class="entry-icon tone-blue">${icon("database")}</span>
        <div>
          <span class="section-label">人力数据</span>
          <h3>人力数据分析</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>期末人数</span><input id="hrHeadcountInput" type="number" value="520" /></label>
        <label><span>本月入职</span><input id="hrHireInput" type="number" value="28" /></label>
        <label><span>本月离职</span><input id="hrExitInput" type="number" value="18" /></label>
        <label><span>人工成本/万元</span><input id="hrCostInput" type="number" value="1680" /></label>
        <label><span>营收/万元</span><input id="hrRevenueInput" type="number" value="9200" /></label>
        <button class="primary-button comp-action-button" data-decision-action="hrdata">${icon("database")}生成摘要</button>
      </div>
      <div id="hrDataOutput">${renderHrDataOutput({ headcount: 520, hires: 28, exits: 18, cost: 1680, revenue: 9200 })}</div>
    </article>
  `;
}

function renderRiskInput() {
  return `
    <article class="interactive-panel">
      <header>
        <span class="entry-icon tone-rose">${icon("triangle-alert")}</span>
        <div>
          <span class="section-label">风险提醒</span>
          <h3>风险提醒生成器</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>关键岗位空缺</span><input id="riskVacancyInput" type="number" value="3" /></label>
        <label><span>高离职风险人数</span><input id="riskPeopleInput" type="number" value="9" /></label>
        <label><span>加班异常团队数</span><input id="riskOvertimeInput" type="number" value="4" /></label>
        <label><span>合规待查事项</span><input id="riskComplianceInput" type="number" value="2" /></label>
        <button class="primary-button comp-action-button" data-decision-action="risk">${icon("triangle-alert")}生成提醒</button>
      </div>
      <div id="riskOutput">${renderRiskOutput({ vacancy: 3, people: 9, overtime: 4, compliance: 2 })}</div>
    </article>
  `;
}

function renderDecisionInsightInput() {
  return `
    <article class="interactive-panel interactive-panel-wide">
      <header>
        <span class="entry-icon tone-teal">${icon("brain")}</span>
        <div>
          <span class="section-label">AI洞察</span>
          <h3>管理问题智能问答</h3>
        </div>
      </header>
      <div class="comp-qa-input">
        <textarea id="decisionQuestionInput" placeholder="例如：哪个部门离职风险最高？人工成本是否超标？">人工成本是否超标？</textarea>
        <button class="primary-button comp-action-button" data-decision-action="insight">${icon("brain")}生成洞察</button>
      </div>
      <div id="decisionInsightOutput">${renderDecisionInsightOutput("人工成本是否超标？")}</div>
    </article>
  `;
}

function renderHrDataOutput({ headcount, hires, exits, cost, revenue }) {
  const safeHeadcount = Math.max(1, toNumber(headcount, 520));
  const exitRate = Math.round((toNumber(exits, 18) / safeHeadcount) * 1000) / 10;
  const avgCost = Math.round((toNumber(cost, 1680) / safeHeadcount) * 10) / 10;
  const costRatio = toNumber(revenue, 9200) > 0 ? Math.round((toNumber(cost, 1680) / toNumber(revenue, 9200)) * 1000) / 10 : 0;
  return `
    <div class="budget-strip">
      <div><span>净增人数</span><strong>${toNumber(hires, 28) - toNumber(exits, 18)}人</strong></div>
      <div><span>月离职率</span><strong>${exitRate}%</strong></div>
      <div><span>人均成本</span><strong>${avgCost}万</strong></div>
    </div>
    <div class="script-box">人工成本收入占比为${costRatio}%。建议结合部门产出、人效和预算目标判断是否需要冻结部分编制或优化招聘节奏。</div>
  `;
}

function renderRiskOutput({ vacancy, people, overtime, compliance }) {
  const total = toNumber(vacancy, 3) * 2 + toNumber(people, 9) + toNumber(overtime, 4) + toNumber(compliance, 2) * 2;
  const level = total >= 20 ? "高" : total >= 10 ? "中" : "低";
  return `
    <div class="risk-callout ${level === "低" ? "is-low-risk" : ""}">
      <span>综合风险等级</span>
      <strong>${level}风险 · 指数${total}</strong>
    </div>
    <ul class="check-list">
      <li>关键岗位空缺：${vacancy}个，建议优先启动招聘或内部调配。</li>
      <li>高离职风险：${people}人，建议安排主管访谈和薪酬复核。</li>
      <li>加班异常团队：${overtime}个，建议核查人效、排班和项目节奏。</li>
      <li>合规待查事项：${compliance}项，建议进入HR合规台账跟进。</li>
    </ul>
  `;
}

function renderDecisionInsightOutput(question) {
  const normalized = normalizeText(question);
  let answer = "建议先明确分析对象、时间范围和对比口径。系统可基于人力数据、预算、离职、绩效和编制表生成管理建议。";
  if (normalized.includes("成本") || normalized.includes("超标")) {
    answer = "建议同时看人工成本收入占比、人均成本、预算使用率和关键岗位产出。如果成本占比上升但人效未同步提升，应优先复核新增编制和奖金发放节奏。";
  } else if (normalized.includes("离职") || normalized.includes("风险")) {
    answer = "建议按部门查看离职率、关键人才离职风险、连续未调薪人数和绩效等级。高绩效且薪酬低于市场的员工应优先进入保留名单。";
  } else if (normalized.includes("招聘") || normalized.includes("编制")) {
    answer = "建议比较当前编制缺口、招聘周期、岗位优先级和预算状态。关键岗位优先补齐，低优先级岗位可延后或内部流动解决。";
  }
  return `
    <div class="qa-grid">
      <div class="qa-item">
        <strong>${question}</strong>
        <span>${answer}</span>
      </div>
    </div>
  `;
}


function getRecruitingRole(roleId) {
  return recruitingKnowledge.roles.find((role) => role.id === roleId) || recruitingKnowledge.roles[0];
}

function setRecruitingRole(roleId) {
  const role = getRecruitingRole(roleId);
  if (!role) return;

  document.querySelectorAll("[data-role-template]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.roleTemplate === role.id);
  });

  const fields = {
    jdTitleInput: role.title,
    jdFamilyInput: role.family,
    jdCityInput: role.city,
    jdSalaryInput: role.salary,
    jdEducationInput: role.id === "business-intelligence-intern" ? "本科及以上在校生" : role.id === "it-support" ? "本科及以上" : "大专及以上优先",
    jdExperienceInput: role.id === "live-streaming-bd" ? "3年以上相关经验" : role.id === "it-support" ? "3年以上技术支持经验" : "经验不限/相关经验优先",
    jdExtraInput: role.tags.join("、"),
  };

  Object.entries(fields).forEach(([fieldId, value]) => {
    const field = document.querySelector(`#${fieldId}`);
    if (field) field.value = value;
  });

  const interviewSelect = document.querySelector("#interviewRoleSelect");
  if (interviewSelect) interviewSelect.value = role.id;
  updateGeneratedJd(role);
  updateInterviewQuestions(role);
}

function updateGeneratedJd(role = getRecruitingRole(document.querySelector("[data-role-template].is-active")?.dataset.roleTemplate)) {
  const output = document.querySelector("#jdOutput");
  if (output && role) {
    output.innerHTML = renderGeneratedJd(role);
    refreshIcons();
  }
}

function updateInterviewQuestions(role = getRecruitingRole(document.querySelector("#interviewRoleSelect")?.value)) {
  const output = document.querySelector("#interviewOutput");
  if (output && role) {
    output.innerHTML = renderInterviewQuestions(role);
    refreshIcons();
  }
}

function getActiveRecruitingRole() {
  const activeRoleId = document.querySelector("[data-role-template].is-active")?.dataset.roleTemplate;
  return getRecruitingRole(activeRoleId);
}

function getRecruitingResumeRecords() {
  return (docState.recruiting || [])
    .filter((doc) => /简历|resume|cv|\.(pdf|docx?|txt|jpg|jpeg|png)$/i.test(doc.name || ""))
    .map((doc) => ({ name: doc.name, size: 0, fromLibrary: true }));
}

function renderResumeUploadInitialStatus() {
  const records = getRecruitingResumeRecords();
  if (records.length) {
    return `
      <strong>资料库已有 ${records.length} 份可用简历</strong>
      <span>${records.slice(0, 3).map((file) => escapeHtml(file.name)).join("、")}</span>
      <em>可直接点击“模拟筛选”，或在这里重新选择简历文件。</em>
    `;
  }
  return "还未选择简历文件。";
}

function updateResumeUploadStatus() {
  const input = document.querySelector("#resumeUploadInput");
  const status = document.querySelector("#resumeUploadStatus");
  if (!status) return;
  const files = Array.from(input?.files || []);
  if (!files.length) {
    status.innerHTML = renderResumeUploadInitialStatus();
    return;
  }
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  status.innerHTML = `
    <strong>已选择 ${files.length} 份简历</strong>
    <span>${files.map((file) => escapeHtml(file.name)).join("、")}</span>
    <em>合计 ${formatSize(totalSize)}，点击“模拟筛选”生成匹配结果。</em>
  `;
}

function scoreResumeFile(file, role, index) {
  const text = `${file.name}${role?.title || ""}${role?.family || ""}`.toLowerCase();
  const hash = [...text].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const tagHits = (role?.tags || []).filter((tag) => text.includes(String(tag).toLowerCase())).length;
  const roleHit = role?.title && text.includes(String(role.title).toLowerCase()) ? 4 : 0;
  return clampNumber(72 + (hash % 16) + tagHits * 3 + roleHit - index * 2, 58, 96);
}

function makeResumeCandidate(file, index, role) {
  const score = scoreResumeFile(file, role, index);
  const roleTags = role?.tags || [];
  const focus = role?.interviewFocus || [];
  const highlights = [
    roleTags[index % Math.max(roleTags.length, 1)] || "岗位关键词待确认",
    focus[index % Math.max(focus.length, 1)] || "经历匹配待确认",
    formatSize(file.size),
  ];
  const risks = score >= 82
    ? ["建议人工复核项目真实性", "确认到岗时间与薪资预期"]
    : score >= 72
      ? ["关键经历需要电话确认", "需补充量化成果或作品案例"]
      : ["与当前JD关键词匹配偏弱", "建议补充完整简历或更换目标岗位"];
  const suggestion = score >= 82
    ? "推荐进入业务面试，可围绕岗位核心能力继续追问。"
    : score >= 72
      ? "建议进入HR电话初筛，先确认硬性条件和稳定性。"
      : "暂不建议直接推进，可要求候选人补充项目经历后再评估。";

  return {
    name: `候选人${index + 1}`,
    targetRole: role?.title || "当前JD",
    score,
    profile: `上传文件：${file.name}。系统按“${role?.title || "当前JD"}”的职责、标签和面试关注点进行模拟匹配。`,
    highlights,
    risks,
    suggestion,
  };
}

function renderResumeScreeningSummary(candidates, role, files) {
  const recommended = candidates.filter((candidate) => candidate.score >= 82).length;
  const review = candidates.filter((candidate) => candidate.score >= 72 && candidate.score < 82).length;
  const average = Math.round(candidates.reduce((sum, candidate) => sum + candidate.score, 0) / Math.max(candidates.length, 1));
  return `
    <article class="screening-summary-card">
      <div>
        <span class="section-label">本次筛选</span>
        <h3>${files.length}份简历 · 匹配${escapeHtml(role?.title || "当前JD")}</h3>
      </div>
      <div class="screening-summary-grid">
        <span><strong>${average}</strong>平均匹配度</span>
        <span><strong>${recommended}</strong>推荐面试</span>
        <span><strong>${review}</strong>建议电话确认</span>
      </div>
      <p>当前为前端模拟筛选：用于验证流程和展示口径。若要读取PDF/Word正文，需要后续接入简历解析服务。</p>
    </article>
  `;
}

function simulateResumeScreening() {
  const input = document.querySelector("#resumeUploadInput");
  const grid = document.querySelector("#candidateGrid");
  const files = Array.from(input?.files || []);
  const sourceFiles = files.length ? files : getRecruitingResumeRecords();
  if (!sourceFiles.length) {
    updateResumeUploadStatus();
    showToast("请先选择要筛选的简历文件。");
    return;
  }

  const role = getActiveRecruitingRole();
  const candidates = sourceFiles.map((file, index) => makeResumeCandidate(file, index, role));
  if (grid) {
    grid.innerHTML = `
      ${renderResumeScreeningSummary(candidates, role, sourceFiles)}
      ${candidates.map((candidate) => renderCandidateCard(candidate)).join("")}
    `;
  }
  updateResumeUploadStatus();
  refreshIcons();
  showToast(`已完成${sourceFiles.length}份简历的模拟筛选。`);
}

function handleCompAction(action) {
  const update = (selector, html) => {
    const target = document.querySelector(selector);
    if (target) target.innerHTML = html;
  };

  if (action === "salary") {
    update(
      "#salaryOutput",
      renderSalaryOutput({
        role: readValue("compRoleInput", "产品经理"),
        level: readValue("compLevelInput", "P5"),
        city: readValue("compCityInput", "上海"),
        years: readValue("compYearsInput", "3-5年"),
        median: readValue("compMedianInput", "23"),
      })
    );
  }

  if (action === "raise") {
    update(
      "#raiseOutput",
      renderRaiseOutput({
        budget: readValue("raiseBudgetInput", "500"),
        headcount: readValue("raiseHeadcountInput", "200"),
        rate: readValue("raiseRateInput", "8"),
      })
    );
  }

  if (action === "fairness") {
    update(
      "#fairnessOutput",
      renderFairnessOutput({
        role: readValue("fairRoleInput", "销售经理"),
        salaryA: readValue("fairSalaryAInput", "20"),
        salaryB: readValue("fairSalaryBInput", "28"),
        threshold: readValue("fairThresholdInput", "20"),
      })
    );
  }

  if (action === "turnover") {
    update(
      "#turnoverOutput",
      renderTurnoverOutput({
        name: readValue("riskNameInput", "张某某"),
        salary: readValue("riskSalaryInput", "22"),
        market: readValue("riskMarketInput", "27"),
        noRaise: readValue("riskNoRaiseInput", "2"),
        performance: readValue("riskPerformanceInput", "B"),
      })
    );
  }

  if (action === "cost") {
    update(
      "#costOutput",
      renderCostOutput({
        base: readValue("costBaseInput", "52"),
        bonus: readValue("costBonusInput", "18"),
        allowance: readValue("costAllowanceInput", "8"),
        social: readValue("costSocialInput", "14"),
        benefit: readValue("costBenefitInput", "8"),
      })
    );
  }

  if (action === "welfare") {
    update(
      "#welfareOutput",
      renderWelfareOutput({
        age: readValue("welfareAgeInput", "28"),
        family: readValue("welfareFamilyInput", "已婚，有孩子"),
        gym: readValue("welfareGymInput", "18"),
        checkup: readValue("welfareCheckupInput", "92"),
      })
    );
  }

  if (action === "communication") {
    update(
      "#communicationOutput",
      renderCommunicationOutput({
        performance: readValue("commPerformanceInput", "B"),
        raise: readValue("commRaiseInput", "3"),
        feedback: readValue("commFeedbackInput", "员工不满意"),
        goal: readValue("commGoalInput", "提升关键项目交付与跨部门协作表现"),
      })
    );
  }

  if (action === "qa") {
    update("#compQaOutput", renderCompQaOutput(readValue("compQaInput", "调薪预算是否超标？")));
  }

  refreshIcons();
  showToast("已根据当前填写内容更新结果。");
}

function setInputValue(id, value) {
  const target = document.querySelector(`#${id}`);
  if (target && value !== undefined && value !== null) target.value = value;
}

function applyCompSample(type) {
  const preset = getCompPreset(type);
  if (type === "salary") {
    setInputValue("compRoleInput", preset.role);
    setInputValue("compLevelInput", preset.level);
    setInputValue("compCityInput", preset.city);
    setInputValue("compEducationInput", preset.education);
    setInputValue("compYearsInput", preset.years);
    setInputValue("compMedianInput", preset.medianK);
    handleCompAction("salary");
  }

  if (type === "raise") {
    setInputValue("raiseBudgetInput", preset.budgetWan);
    setInputValue("raiseHeadcountInput", preset.headcount);
    setInputValue("raiseRateInput", preset.rate);
    handleCompAction("raise");
  }

  if (type === "fairness") {
    setInputValue("fairRoleInput", preset.role);
    setInputValue("fairSalaryAInput", preset.salaryA);
    setInputValue("fairSalaryBInput", preset.salaryB);
    setInputValue("fairThresholdInput", preset.threshold);
    handleCompAction("fairness");
  }

  if (type === "risk") {
    setInputValue("riskNameInput", preset.employee);
    setInputValue("riskSalaryInput", preset.salaryK);
    setInputValue("riskMarketInput", preset.marketK);
    setInputValue("riskNoRaiseInput", preset.noRaiseYears);
    setInputValue("riskPerformanceInput", preset.performance);
    handleCompAction("turnover");
  }

  if (type === "cost") {
    setInputValue("costBaseInput", preset.base);
    setInputValue("costBonusInput", preset.bonus);
    setInputValue("costAllowanceInput", preset.allowance);
    setInputValue("costSocialInput", preset.social);
    setInputValue("costBenefitInput", preset.benefit);
    handleCompAction("cost");
  }

  if (type === "welfare") {
    setInputValue("welfareAgeInput", preset.age);
    setInputValue("welfareFamilyInput", preset.family);
    setInputValue("welfareGymInput", preset.gymUsage);
    setInputValue("welfareCheckupInput", preset.checkupUsage);
    handleCompAction("welfare");
  }

  if (type === "communication") {
    setInputValue("commPerformanceInput", preset.performance);
    setInputValue("commRaiseInput", preset.raise);
    setInputValue("commFeedbackInput", preset.feedback);
    setInputValue("commGoalInput", preset.goal);
    handleCompAction("communication");
  }

  if (type === "qa") {
    setInputValue("compQaInput", compensationSampleData.presets?.qaQuestion);
    handleCompAction("qa");
  }
}

function handleDevelopmentAction(action) {
  const update = (selector, html) => {
    const target = document.querySelector(selector);
    if (target) target.innerHTML = html;
  };

  if (action === "training") {
    update(
      "#trainingOutput",
      renderTrainingOutput({
        name: readValue("trainNameInput", "王某某"),
        role: readValue("trainRoleInput", "销售主管"),
        gap: readValue("trainGapInput", "团队管理、业务复盘"),
        performance: readValue("trainPerformanceInput", "B+"),
        hours: readValue("trainHoursInput", "3"),
      })
    );
  }

  if (action === "assessment") {
    update(
      "#assessmentOutput",
      renderAssessmentOutput({
        name: readValue("assessNameInput", "李某某"),
        role: readValue("assessRoleInput", "产品经理P6"),
        skill: readValue("assessSkillInput", "78"),
        collab: readValue("assessCollabInput", "72"),
        project: readValue("assessProjectInput", "64"),
        lead: readValue("assessLeadInput", "69"),
      })
    );
  }

  if (action === "growth") {
    update(
      "#growthOutput",
      renderGrowthOutput({
        name: readValue("growthNameInput", "陈某某"),
        current: readValue("growthCurrentInput", "HRBP"),
        target: readValue("growthTargetInput", "高级HRBP"),
        months: readValue("growthMonthsInput", "6"),
        mentor: readValue("growthMentorInput", "业务负责人+HRD"),
        focus: readValue("growthFocusInput", "业务洞察、组织诊断、管理层汇报"),
      })
    );
  }

  refreshIcons();
  showToast("人才发展结果已根据输入更新。");
}

function handleDecisionAction(action) {
  const update = (selector, html) => {
    const target = document.querySelector(selector);
    if (target) target.innerHTML = html;
  };

  if (action === "hrdata") {
    update(
      "#hrDataOutput",
      renderHrDataOutput({
        headcount: readValue("hrHeadcountInput", "520"),
        hires: readValue("hrHireInput", "28"),
        exits: readValue("hrExitInput", "18"),
        cost: readValue("hrCostInput", "1680"),
        revenue: readValue("hrRevenueInput", "9200"),
      })
    );
  }

  if (action === "risk") {
    update(
      "#riskOutput",
      renderRiskOutput({
        vacancy: readValue("riskVacancyInput", "3"),
        people: readValue("riskPeopleInput", "9"),
        overtime: readValue("riskOvertimeInput", "4"),
        compliance: readValue("riskComplianceInput", "2"),
      })
    );
  }

  if (action === "insight") {
    update("#decisionInsightOutput", renderDecisionInsightOutput(readValue("decisionQuestionInput", "人工成本是否超标？")));
  }

  refreshIcons();
  showToast("管理决策结果已根据输入更新。");
}

function renderServiceModule(item) {
  return `
    <section class="employee-service-hero">
      <div class="employee-service-copy">
        <span class="eyebrow">员工服务问答中心</span>
        <h2>${item.title}</h2>
        <p>员工可以直接提问，系统会优先匹配内部资料和官方依据，并给出可追溯的回答来源。</p>
        <div class="service-proof-row">
          <span>${serviceKnowledge.faqs.length}个高频问答</span>
          <span>${Object.keys(serviceKnowledge.sources).length}个依据来源</span>
          <span>核对日期 ${serviceKnowledge.verifiedAt}</span>
        </div>
      </div>
      <div class="employee-service-status">
        <span class="section-label">答复策略</span>
        <strong>先依据，后回答</strong>
        <p>涉及政策、税务、社保、公积金和年金的问题，页面会展示来源链接，便于HR复核。</p>
      </div>
    </section>

    <section class="metric-grid">
      ${item.kpis
        .map(
          ([label, value, trend, iconName, tone]) => `
            <article class="metric-card">
              <header>
                <span>${label}</span>
                <span class="metric-icon ${tone}">${icon(iconName)}</span>
              </header>
              <strong>${value}</strong>
              <span class="metric-trend">${trend}</span>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="section-band" id="employeeQa">
      <div class="section-title">
        <div>
          <span class="section-label">员工直接提问</span>
          <h2>政策问答工作台</h2>
          <p>覆盖人才服务、年终奖税优、综合保险、企业年金和个税申报。</p>
        </div>
      </div>
      ${renderEmployeeServiceCenter()}
    </section>

    <section class="dashboard-grid">
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">可视化看板</span>
            <h2>员工问题热度</h2>
            <p>按员工咨询主题展示当前服务压力。</p>
          </div>
        </div>
        ${renderBars(item.bars)}
      </div>
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">处理分布</span>
            <h2>问答处理状态</h2>
            <p>区分自助解决、人工转接、资料待补和政策待更新。</p>
          </div>
        </div>
        ${renderDonut(item.donut)}
      </div>
    </section>

    <section class="section-band" id="tools">
      <div class="section-title">
        <div>
          <span class="section-label">业务功能</span>
          <h2>制度问答与流程指引</h2>
          <p>围绕五类员工高频事项，输出可问答、可办理、可追溯的服务内容。</p>
        </div>
      </div>
      ${renderServiceTools(item)}
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">依据库</span>
          <h2>本地资料与官方链接</h2>
          <p>本地资料用于内部知识沉淀，官方链接用于核对实时有效性。</p>
        </div>
      </div>
      ${renderServiceSourceLibrary()}
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">待办与洞察</span>
          <h2>近期重点事项</h2>
        </div>
      </div>
      ${renderTable(item.table)}
    </section>

    ${renderDocCenter("service", "员工服务中心资料库", "上传或更新制度、流程、政府政策、FAQ清单和员工服务口径。")}
  `;
}

function renderEmployeeServiceCenter() {
  const firstFaq = serviceKnowledge.faqs[0];
  return `
    <div class="employee-qa-layout">
      <div class="qa-input-panel">
        <div class="qa-input-head">
          <span class="entry-icon tone-blue">${icon("message-circle-question")}</span>
          <div>
            <h3>员工问题</h3>
            <p>输入自然语言问题，或直接点击下方高频问题。</p>
          </div>
        </div>
        <textarea id="employeeQuestion" placeholder="例如：上海落户需要什么条件？">${firstFaq?.question || ""}</textarea>
        <div class="qa-action-row">
          <button class="primary-button" id="askQuestionButton">${icon("sparkles")}生成回答</button>
          <button class="secondary-button" data-scroll-target="documents">${icon("upload-cloud")}补充资料</button>
        </div>
        <div class="service-category-pills">
          ${serviceKnowledge.categories
            .map((category, index) => `<button class="tab-button ${index === 0 ? "is-active" : ""}" data-service-category="${category}">${category}</button>`)
            .join("")}
        </div>
        <div class="quick-questions" id="quickQuestions">
          ${renderQuickQuestions(serviceKnowledge.categories[0])}
        </div>
      </div>
      <div class="qa-result-panel" id="qaResult">
        ${renderFaqResult(firstFaq)}
      </div>
    </div>
  `;
}

function renderQuickQuestions(category) {
  return serviceKnowledge.faqs
    .filter((faq) => faq.category === category)
    .slice(0, 6)
    .map((faq) => `<button class="quick-question" data-faq-id="${faq.id}">${faq.question}</button>`)
    .join("");
}

function renderFaqResult(faq) {
  if (!faq) {
    return `
      <div class="qa-result-empty">
        <span class="entry-icon tone-amber">${icon("search")}</span>
        <h3>暂未匹配到确定答案</h3>
        <p>建议补充更具体的信息，或上传公司制度和最新政策文件后再生成答复。</p>
      </div>
    `;
  }

  return `
    <div class="qa-answer-card">
      <div class="qa-answer-head">
        <div>
          <span class="section-label">${faq.category}</span>
          <h3>${faq.question}</h3>
        </div>
        <span class="status-tag">可追溯</span>
      </div>
      <p class="qa-short-answer">${faq.shortAnswer}</p>
      <div class="answer-block">
        <span class="section-label">员工可读回答</span>
        <ul>
          ${faq.answer.map((line) => `<li>${line}</li>`).join("")}
        </ul>
      </div>
      <div class="answer-block">
        <span class="section-label">HR后续动作</span>
        <ul>
          ${faq.actions.map((line) => `<li>${line}</li>`).join("")}
        </ul>
      </div>
      <div class="answer-sources">
        <span class="section-label">依据来源</span>
        <div class="source-chip-list">
          ${faq.sources.map((sourceId) => renderSourceChip(sourceId)).join("")}
        </div>
      </div>
      <p class="source-note">政策类问题以官方链接最新口径为准；本页依据核对日期为 ${serviceKnowledge.verifiedAt}。</p>
    </div>
  `;
}

function renderSourceChip(sourceId) {
  const source = serviceKnowledge.sources[sourceId];
  if (!source) return "";
  return `
    <a class="source-chip" href="${source.url}" target="_blank" rel="noreferrer">
      ${icon(source.type === "本地导入" ? "file-text" : "external-link")}
      <span>${source.title}</span>
    </a>
  `;
}

function renderServiceSourceLibrary() {
  return `
    <div class="source-grid">
      ${Object.entries(serviceKnowledge.sources)
        .map(
          ([sourceId, source]) => `
            <article class="source-card">
              <header>
                <span class="entry-icon ${source.type === "本地导入" ? "tone-blue" : "tone-green"}">${icon(source.type === "本地导入" ? "file-check-2" : "shield-check")}</span>
                <span class="status-tag">${source.type}</span>
              </header>
              <h3>${source.title}</h3>
              <p>${source.org} · ${source.updated}</p>
              <p>${source.note}</p>
              <a href="${source.url}" target="_blank" rel="noreferrer">打开依据 ${icon("arrow-up-right")}</a>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, "");
}

function findServiceFaq(query) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return serviceKnowledge.faqs[0];

  let bestFaq = null;
  let bestScore = 0;
  serviceKnowledge.faqs.forEach((faq) => {
    const question = normalizeText(faq.question);
    let score = question.includes(normalizedQuery) || normalizedQuery.includes(question) ? 20 : 0;
    faq.keywords.forEach((keyword) => {
      const normalizedKeyword = normalizeText(keyword);
      if (normalizedKeyword && normalizedQuery.includes(normalizedKeyword)) {
        score += 6;
      }
      if (normalizedKeyword && question.includes(normalizedKeyword)) {
        score += 1;
      }
    });
    if (score > bestScore) {
      bestScore = score;
      bestFaq = faq;
    }
  });

  if (bestScore >= 6) return bestFaq;
  return guessFaqByTopic(normalizedQuery);
}

function guessFaqByTopic(query) {
  const topicMap = [
    [["落户", "居住证", "积分", "上学"], "人才服务"],
    [["年终奖", "奖金", "税优"], "年终奖税优"],
    [["社保", "医保", "公积金", "报销", "断缴", "买房"], "综合保险"],
    [["年金", "退休", "养老"], "企业年金"],
    [["个税", "汇算", "租房", "房贷", "小孩", "到手", "劳务"], "个税申报"],
  ];

  const match = topicMap.find(([keywords]) => keywords.some((keyword) => query.includes(keyword)));
  if (!match) return null;
  return serviceKnowledge.faqs.find((faq) => faq.category === match[1]) || null;
}

function setQaResult(faq) {
  const result = document.querySelector("#qaResult");
  if (result) {
    result.innerHTML = renderFaqResult(faq);
    refreshIcons();
  }
}

function renderCompensationModule(item) {
  return `
    <section class="comp-hero">
      <div class="comp-hero-main">
        <span class="eyebrow">重点模块</span>
        <h2>${item.title}</h2>
        <p>${item.short}</p>
        <div class="comp-quick-actions">
          <button class="primary-button" data-scroll-target="compTools">${icon("sparkles")}查看8个AI工具</button>
          <button class="secondary-button" data-scroll-target="documents">${icon("upload-cloud")}上传薪酬资料</button>
        </div>
      </div>
      <div class="comp-hero-board">
        <span class="section-label">薪酬健康度</span>
        <strong>86</strong>
        <div class="health-meter" aria-hidden="true">
          <span style="--meter-width:86%"></span>
        </div>
        <p>预算可控，需关注同岗不同薪与关键人才保留。</p>
      </div>
    </section>

    <section class="metric-grid">
      ${item.kpis
        .map(
          ([label, value, trend, iconName, tone]) => `
            <article class="metric-card">
              <header>
                <span>${label}</span>
                <span class="metric-icon ${tone}">${icon(iconName)}</span>
              </header>
              <strong>${value}</strong>
              <span class="metric-trend">${trend}</span>
            </article>
          `
        )
        .join("")}
    </section>

    ${renderCompSampleLibrary()}

    <section class="dashboard-grid">
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">薪酬结构看板</span>
            <h2>人工成本构成</h2>
            <p>基本工资、奖金、补贴、社保公积金和福利占比。</p>
          </div>
        </div>
        ${renderBars(item.bars)}
      </div>
      <div class="section-band">
        <div class="section-title">
          <div>
            <span class="section-label">预算看板</span>
            <h2>年度调薪预算</h2>
            <p>预算池与风险预留分布。</p>
          </div>
        </div>
        ${renderDonut(item.donut)}
      </div>
    </section>

    <section class="section-band" id="compTools">
      <div class="section-title">
        <div>
          <span class="section-label">AI薪酬福利工具</span>
          <h2>8个高频工作场景</h2>
          <p>覆盖定薪、调薪、公平性、保留、成本、福利、沟通和数据问答。</p>
        </div>
      </div>
      <div class="comp-tool-grid">
        ${renderSalaryAssistant()}
        ${renderAdjustmentPlans()}
        ${renderFairnessAnalysis()}
        ${renderTurnoverRisk()}
        ${renderCostStructure()}
        ${renderWelfareAssistant()}
        ${renderCompCommunication()}
        ${renderCompQa()}
      </div>
    </section>

    <section class="section-band">
      <div class="section-title">
        <div>
          <span class="section-label">风险与建议</span>
          <h2>管理层关注事项</h2>
        </div>
      </div>
      ${renderTable(item.table)}
    </section>

    ${renderDocCenter("compensation", "AI薪酬与福利中心资料库", "上传或更新薪酬调研报告、薪酬带宽、调薪规则、福利政策、绩效等级和员工薪酬数据。")}
  `;
}

function getCompPreset(name) {
  return compensationSampleData.presets?.[name] || {};
}

function renderCompSampleLibrary() {
  const source = compensationSampleData.sourceSummary || {};
  const insights = compensationSampleData.insights || {};
  const benchmarks = compensationSampleData.salaryBenchmarks || [];
  const privacy = compensationSampleData.privacy || [];
  return `
    <section class="section-band comp-sample-library">
      <div class="section-title">
        <div>
          <span class="section-label">匿名样例库</span>
          <h2>已接入本地工资表示例</h2>
          <p>${source.note || "仅保留薪酬测算需要的安全字段，敏感身份信息不进入网页。"}</p>
        </div>
        <div class="comp-sample-actions">
          <button class="secondary-button" data-comp-sample="salary">${icon("calculator")}套用定薪样例</button>
          <button class="secondary-button" data-comp-sample="raise">${icon("badge-percent")}套用调薪样例</button>
          <button class="secondary-button" data-comp-sample="cost">${icon("chart-pie")}套用结构样例</button>
        </div>
      </div>
      <div class="comp-sample-grid">
        <article class="sample-card">
          <span>资料状态</span>
          <strong>${source.files || 0}份文件 / ${source.usableRows || 0}条匿名样例</strong>
          <p>${privacy.slice(0, 2).join("；") || "已脱敏处理"}</p>
        </article>
        <article class="sample-card">
          <span>月基本工资样例</span>
          <strong>${insights.monthlyBaseRangeK || "待上传"}</strong>
          <p>中位数约${insights.monthlyBaseMedianK || "-"}K，适合作为页面演示的内部参考口径。</p>
        </article>
        <article class="sample-card">
          <span>年包范围样例</span>
          <strong>${insights.annualPackageRangeWan || "待上传"}</strong>
          <p>${insights.commonAllowance || "可继续补充津贴、社保和福利明细。"}</p>
        </article>
      </div>
      <div class="sample-benchmark-grid">
        ${benchmarks
          .map(
            (item) => `
              <article>
                <span>${item.label}</span>
                <strong>${item.baseMonthlyK}K/月</strong>
                <p>年基本${item.annualBaseWan}万 · 绩效${item.annualPerformanceWan}万 · 年包${item.annualPackageWan}万</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="comp-sample-actions inline">
        <button class="secondary-button" data-comp-sample="fairness">${icon("scale")}套用公平性样例</button>
        <button class="secondary-button" data-comp-sample="risk">${icon("radar")}套用离职风险样例</button>
        <button class="secondary-button" data-comp-sample="welfare">${icon("gift")}套用福利样例</button>
        <button class="secondary-button" data-comp-sample="communication">${icon("message-square-text")}套用沟通样例</button>
        <button class="secondary-button" data-comp-sample="qa">${icon("bot-message-square")}套用问答样例</button>
      </div>
      <p class="privacy-note">${privacy.join("；")}</p>
    </section>
  `;
}

function renderSalaryAssistant() {
  const preset = getCompPreset("salary");
  return `
    <article class="comp-panel comp-panel-wide">
      <header>
        <span class="entry-icon tone-green">${icon("calculator")}</span>
        <div>
          <span class="section-label">模块1</span>
          <h3>薪酬测算助手</h3>
        </div>
      </header>
      <div class="comp-split">
        <div class="input-stack">
          ${[
            ["岗位", "compRoleInput", preset.role || "专业序列岗位"],
            ["职级", "compLevelInput", preset.level || "SA3"],
            ["城市", "compCityInput", preset.city || "上海"],
            ["学历", "compEducationInput", preset.education || "本科"],
            ["工作年限", "compYearsInput", preset.years || "5-8年"],
            ["市场50分位/K", "compMedianInput", preset.medianK || "25"],
          ]
            .map(([label, id, value]) => `<label><span>${label}</span><input id="${id}" value="${value}" /></label>`)
            .join("")}
          <button class="primary-button comp-action-button" data-comp-action="salary">${icon("calculator")}生成薪资建议</button>
        </div>
        <div class="salary-output" id="salaryOutput">${renderSalaryOutput({ role: preset.role || "专业序列岗位", level: preset.level || "SA3", city: preset.city || "上海", years: preset.years || "5-8年", median: preset.medianK || 25 })}</div>
      </div>
    </article>
  `;
}

function renderAdjustmentPlans() {
  const preset = getCompPreset("raise");
  return `
    <article class="comp-panel comp-panel-wide">
      <header>
        <span class="entry-icon tone-amber">${icon("badge-percent")}</span>
        <div>
          <span class="section-label">模块2</span>
          <h3>调薪方案生成</h3>
        </div>
      </header>
      <div class="comp-form-row">
        <label><span>年度预算/万元</span><input id="raiseBudgetInput" type="number" value="${preset.budgetWan || 150}" /></label>
        <label><span>员工人数</span><input id="raiseHeadcountInput" type="number" value="${preset.headcount || 80}" /></label>
        <label><span>整体涨薪率/%</span><input id="raiseRateInput" type="number" value="${preset.rate || 8}" /></label>
        <button class="primary-button comp-action-button" data-comp-action="raise">${icon("badge-percent")}生成方案</button>
      </div>
      <div id="raiseOutput">${renderRaiseOutput({ budget: preset.budgetWan || 150, headcount: preset.headcount || 80, rate: preset.rate || 8 })}</div>
    </article>
  `;
}

function renderFairnessAnalysis() {
  const preset = getCompPreset("fairness");
  return `
    <article class="comp-panel">
      <header>
        <span class="entry-icon tone-rose">${icon("scale")}</span>
        <div>
          <span class="section-label">模块3</span>
          <h3>薪酬公平性分析</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>岗位</span><input id="fairRoleInput" value="${preset.role || "同序列岗位"}" /></label>
        <label><span>员工A薪资/K</span><input id="fairSalaryAInput" type="number" value="${preset.salaryA || 24.5}" /></label>
        <label><span>员工B薪资/K</span><input id="fairSalaryBInput" type="number" value="${preset.salaryB || 36.3}" /></label>
        <label><span>差异阈值/%</span><input id="fairThresholdInput" type="number" value="${preset.threshold || 20}" /></label>
        <button class="primary-button comp-action-button" data-comp-action="fairness">${icon("scale")}分析公平性</button>
      </div>
      <div id="fairnessOutput">${renderFairnessOutput({ role: preset.role || "同序列岗位", salaryA: preset.salaryA || 24.5, salaryB: preset.salaryB || 36.3, threshold: preset.threshold || 20 })}</div>
    </article>
  `;
}

function renderTurnoverRisk() {
  const preset = getCompPreset("risk");
  return `
    <article class="comp-panel">
      <header>
        <span class="entry-icon tone-rose">${icon("radar")}</span>
        <div>
          <span class="section-label">模块4</span>
          <h3>离职风险预警</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>员工姓名</span><input id="riskNameInput" value="${preset.employee || "员工A"}" /></label>
        <label><span>当前薪资/K</span><input id="riskSalaryInput" type="number" value="${preset.salaryK || 13.6}" /></label>
        <label><span>市场薪资/K</span><input id="riskMarketInput" type="number" value="${preset.marketK || 19}" /></label>
        <label><span>未调薪年数</span><input id="riskNoRaiseInput" type="number" value="${preset.noRaiseYears || 2}" /></label>
        <label><span>绩效结果</span><input id="riskPerformanceInput" value="${preset.performance || "B+"}" /></label>
        <button class="primary-button comp-action-button" data-comp-action="turnover">${icon("radar")}生成预警</button>
      </div>
      <div id="turnoverOutput">${renderTurnoverOutput({ name: preset.employee || "员工A", salary: preset.salaryK || 13.6, market: preset.marketK || 19, noRaise: preset.noRaiseYears || 2, performance: preset.performance || "B+" })}</div>
    </article>
  `;
}

function renderCostStructure() {
  const preset = getCompPreset("cost");
  return `
    <article class="comp-panel comp-panel-wide">
      <header>
        <span class="entry-icon tone-blue">${icon("chart-pie")}</span>
        <div>
          <span class="section-label">模块5</span>
          <h3>薪酬结构分析</h3>
        </div>
      </header>
      <div class="comp-form-row">
        <label><span>基本工资/%</span><input id="costBaseInput" type="number" value="${preset.base || 67}" /></label>
        <label><span>奖金/%</span><input id="costBonusInput" type="number" value="${preset.bonus || 28}" /></label>
        <label><span>补贴/%</span><input id="costAllowanceInput" type="number" value="${preset.allowance || 3}" /></label>
        <label><span>社保公积金/%</span><input id="costSocialInput" type="number" value="${preset.social || 1}" /></label>
        <label><span>福利/%</span><input id="costBenefitInput" type="number" value="${preset.benefit || 1}" /></label>
        <button class="primary-button comp-action-button" data-comp-action="cost">${icon("chart-pie")}生成图表</button>
      </div>
      <div id="costOutput">${renderCostOutput({ base: preset.base || 67, bonus: preset.bonus || 28, allowance: preset.allowance || 3, social: preset.social || 1, benefit: preset.benefit || 1 })}</div>
    </article>
  `;
}

function renderWelfareAssistant() {
  const preset = getCompPreset("welfare");
  return `
    <article class="comp-panel">
      <header>
        <span class="entry-icon tone-green">${icon("gift")}</span>
        <div>
          <span class="section-label">模块6</span>
          <h3>福利推荐助手</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>年龄</span><input id="welfareAgeInput" type="number" value="${preset.age || 32}" /></label>
        <label><span>婚育情况</span><input id="welfareFamilyInput" value="${preset.family || "已婚，有孩子"}" /></label>
        <label><span>健身补贴使用率/%</span><input id="welfareGymInput" type="number" value="${preset.gymUsage || 18}" /></label>
        <label><span>体检福利使用率/%</span><input id="welfareCheckupInput" type="number" value="${preset.checkupUsage || 92}" /></label>
        <button class="primary-button comp-action-button" data-comp-action="welfare">${icon("gift")}推荐福利</button>
      </div>
      <div id="welfareOutput">${renderWelfareOutput({ age: preset.age || 32, family: preset.family || "已婚，有孩子", gym: preset.gymUsage || 18, checkup: preset.checkupUsage || 92 })}</div>
    </article>
  `;
}

function renderCompCommunication() {
  const preset = getCompPreset("communication");
  return `
    <article class="comp-panel">
      <header>
        <span class="entry-icon tone-blue">${icon("message-square-text")}</span>
        <div>
          <span class="section-label">模块7</span>
          <h3>薪酬沟通助手</h3>
        </div>
      </header>
      <div class="comp-form-row compact">
        <label><span>绩效结果</span><input id="commPerformanceInput" value="${preset.performance || "B+"}" /></label>
        <label><span>调薪幅度/%</span><input id="commRaiseInput" type="number" value="${preset.raise || 3}" /></label>
        <label><span>员工反馈</span><input id="commFeedbackInput" value="${preset.feedback || "员工认为涨幅低于预期"}" /></label>
        <label><span>下一阶段目标</span><input id="commGoalInput" value="${preset.goal || "提升关键项目交付与跨团队协作结果"}" /></label>
        <button class="primary-button comp-action-button" data-comp-action="communication">${icon("message-square-text")}生成话术</button>
      </div>
      <div id="communicationOutput">${renderCommunicationOutput({ performance: preset.performance || "B+", raise: preset.raise || 3, feedback: preset.feedback || "员工认为涨幅低于预期", goal: preset.goal || "提升关键项目交付与跨团队协作结果" })}</div>
    </article>
  `;
}

function renderCompQa() {
  const question = compensationSampleData.presets?.qaQuestion || "匿名工资样例里，月基本工资中位数是多少？";
  return `
    <article class="comp-panel comp-panel-wide">
      <header>
        <span class="entry-icon tone-teal">${icon("bot-message-square")}</span>
        <div>
          <span class="section-label">模块8 · 推荐亮点</span>
          <h3>薪酬数据智能问答</h3>
        </div>
      </header>
      <div class="comp-qa-input">
        <textarea id="compQaInput" placeholder="直接输入薪酬数据问题，例如：匿名工资样例里，月基本工资中位数是多少？">${question}</textarea>
        <button class="primary-button comp-action-button" data-comp-action="qa">${icon("bot-message-square")}生成回答</button>
      </div>
      <div id="compQaOutput">${renderCompQaOutput(question)}</div>
    </article>
  `;
}

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function readValue(id, fallback = "") {
  return document.querySelector(`#${id}`)?.value?.trim() || fallback;
}

function renderSalaryOutput({ role, level, city, years, median }) {
  const safeMedian = Math.max(1, toNumber(median, 23));
  const p25 = Math.round(safeMedian * 0.78);
  const p75 = Math.round(safeMedian * 1.3);
  const offerLow = Math.round(safeMedian * 0.95);
  const offerHigh = Math.round(safeMedian * 1.08);
  return `
    <span class="section-label">AI输出</span>
    <h4>${level}${role} · ${city} · ${years}经验</h4>
    <div class="salary-band">
      <div><span>市场25分位</span><strong>${p25}K</strong></div>
      <div><span>市场50分位</span><strong>${safeMedian}K</strong></div>
      <div><span>市场75分位</span><strong>${p75}K</strong></div>
    </div>
    <div class="offer-box">
      <span>建议Offer</span>
      <strong>${offerLow}K-${offerHigh}K</strong>
    </div>
    <div class="value-tags">
      <span>Offer审批参考</span>
      <span>招聘定薪参考</span>
      <span>内部匿名样例参考</span>
      <span>${city}市场口径可更新</span>
    </div>
  `;
}

function renderRaiseOutput({ budget, headcount, rate }) {
  const safeBudget = Math.max(0, toNumber(budget, 500));
  const safeHeadcount = Math.max(1, toNumber(headcount, 200));
  const safeRate = Math.max(0, toNumber(rate, 8));
  const perPerson = safeBudget / safeHeadcount;
  const performanceBudget = safeBudget * 0.97;
  const retentionBudget = safeBudget * 1.04;
  return `
    <div class="budget-strip">
      <div><span>年度预算</span><strong>${safeBudget}万元</strong></div>
      <div><span>员工人数</span><strong>${safeHeadcount}人</strong></div>
      <div><span>人均预算</span><strong>${perPerson.toFixed(1)}万</strong></div>
    </div>
    <div class="plan-grid">
      <div class="plan-card">
        <strong>方案A（均衡型）</strong>
        <span>全员增长${safeRate}%</span>
        <em>预算影响：${safeBudget.toFixed(0)}万元</em>
      </div>
      <div class="plan-card">
        <strong>方案B（绩效导向）</strong>
        <span>A等级${Math.round(safeRate * 1.5)}% · B等级${safeRate}% · C等级${Math.max(1, Math.round(safeRate * 0.4))}%</span>
        <em>预算影响：约${performanceBudget.toFixed(0)}万元</em>
      </div>
      <div class="plan-card">
        <strong>方案C（人才保留型）</strong>
        <span>核心岗位${Math.round(safeRate * 1.9)}% · 普通岗位${Math.max(1, Math.round(safeRate * 0.65))}%</span>
        <em>预算影响：约${retentionBudget.toFixed(0)}万元</em>
      </div>
    </div>
  `;
}

function renderFairnessOutput({ role, salaryA, salaryB, threshold }) {
  const low = Math.min(toNumber(salaryA, 20), toNumber(salaryB, 28));
  const high = Math.max(toNumber(salaryA, 20), toNumber(salaryB, 28));
  const diff = low > 0 ? Math.round(((high - low) / low) * 100) : 0;
  const isRisk = diff >= toNumber(threshold, 20);
  return `
    <div class="compare-box">
      <div><span>${role}A</span><strong>${toNumber(salaryA, 20)}K</strong></div>
      <div><span>${role}B</span><strong>${toNumber(salaryB, 28)}K</strong></div>
    </div>
    <div class="risk-callout ${isRisk ? "" : "is-low-risk"}">
      <span>AI提示</span>
      <strong>差异${diff}% · ${isRisk ? "建议核查" : "暂未超过阈值"}</strong>
    </div>
    <ul class="check-list">
      <li>建议核查：入职时间与岗位范围是否一致</li>
      <li>建议核查：绩效等级、贡献差异和晋升记录</li>
      <li>建议核查：特殊津贴、保留奖金和历史调薪原因</li>
    </ul>
  `;
}

function renderTurnoverOutput({ name, salary, market, noRaise, performance }) {
  const gap = toNumber(market, 27) > 0 ? Math.round(((toNumber(market, 27) - toNumber(salary, 22)) / toNumber(market, 27)) * 100) : 0;
  const riskScore = clampNumber((gap > 15 ? 2 : gap > 5 ? 1 : 0) + (toNumber(noRaise, 2) >= 2 ? 2 : toNumber(noRaise, 2) >= 1 ? 1 : 0) + (/a|b/i.test(performance) ? 1 : 0), 1, 5);
  const stars = "★★★★★".slice(0, riskScore) + "☆☆☆☆☆".slice(0, 5 - riskScore);
  return `
    <div class="person-risk">
      <span>风险员工</span>
      <strong>${name}</strong>
    </div>
    <ul class="check-list">
      <li>市场薪酬差距：${gap > 0 ? `偏低${gap}%` : "不低于市场参考"}</li>
      <li>调薪历史：连续${toNumber(noRaise, 2)}年未调薪</li>
      <li>绩效结果：${performance}</li>
    </ul>
    <div class="star-risk">
      <span>离职风险</span>
      <strong>${stars}</strong>
    </div>
  `;
}

function renderCostOutput({ base, bonus, allowance, social, benefit }) {
  const rows = [
    ["基本工资", clampNumber(toNumber(base, 52), 0, 100), "var(--green)"],
    ["奖金", clampNumber(toNumber(bonus, 18), 0, 100), "var(--amber)"],
    ["补贴", clampNumber(toNumber(allowance, 8), 0, 100), "var(--blue)"],
    ["社保公积金", clampNumber(toNumber(social, 14), 0, 100), "var(--teal)"],
    ["福利", clampNumber(toNumber(benefit, 8), 0, 100), "var(--rose)"],
  ];
  return `
    <div class="comp-split">
      <div>
        <span class="section-label">人工成本构成</span>
        ${renderMiniBars(rows)}
      </div>
      <div>
        <span class="section-label">AI分析</span>
        <div class="script-box">当前为匿名样例口径：基本工资占比${rows[0][1]}%，奖金占比${rows[1][1]}%，福利相关成本占比${rows[4][1]}%。如果固定成本过高，可评估绩效奖金与弹性福利的配置空间；正式测算建议继续补充社保、公积金和福利明细。</div>
      </div>
    </div>
  `;
}

function renderWelfareOutput({ age, family, gym, checkup }) {
  const recommendations = ["补充医疗险", "年度体检"];
  if (String(family).includes("孩")) recommendations.push("子女教育福利");
  if (toNumber(age, 28) < 35) recommendations.push("运动健康福利");
  recommendations.push("节假日福利");
  return `
    <div class="profile-box">
      <span>员工画像</span>
      <strong>${age}岁 · ${family}</strong>
    </div>
    <div class="value-tags">
      ${recommendations.slice(0, 5).map((item) => `<span>${item}</span>`).join("")}
    </div>
    ${renderMiniBars([
      ["健身补贴使用率", clampNumber(toNumber(gym, 18), 0, 100), "var(--amber)"],
      ["体检福利使用率", clampNumber(toNumber(checkup, 92), 0, 100), "var(--green)"],
    ])}
  `;
}

function renderCommunicationOutput({ performance, raise, feedback, goal }) {
  return `
    <div class="profile-box">
      <span>HR输入</span>
      <strong>绩效${performance} · 调薪${raise}% · ${feedback}</strong>
    </div>
    <div class="script-box">
      本次调薪综合考虑公司经营情况、市场水平以及个人绩效表现。您本阶段绩效为${performance}，因此获得了${raise}%的调薪安排。我们也理解您对薪酬成长的期待，下一阶段建议重点聚焦“${goal}”。达成目标后，我们会结合岗位贡献、绩效结果和薪酬带宽，为您争取更大的薪酬增长空间。
    </div>
  `;
}

function renderCompQaOutput(question) {
  const normalized = normalizeText(question);
  const insights = compensationSampleData.insights || {};
  let answer = "已收到问题。建议先接入员工薪酬明细、部门成本、调薪记录和市场薪酬表，系统即可按口径输出可追溯答案。";
  if (normalized.includes("匿名") || normalized.includes("样例") || normalized.includes("工资表")) {
    answer = `当前已接入匿名工资表示例，只保留薪级、月基本工资、年基本工资、绩效工资和津贴口径。样例月基本工资范围为${insights.monthlyBaseRangeK || "待补充"}，中位数约${insights.monthlyBaseMedianK || "-"}K；正式决策前建议继续上传完整薪酬明细、部门归属和市场薪酬表。`;
  } else if (normalized.includes("月基本") || normalized.includes("中位数")) {
    answer = `匿名样例口径下，月基本工资中位数约${insights.monthlyBaseMedianK || "-"}K，样例范围为${insights.monthlyBaseRangeK || "待补充"}。该数字适合做页面演示，正式分析建议使用全量在岗员工数据重新计算。`;
  } else if (normalized.includes("结构") || normalized.includes("绩效")) {
    answer = compensationSampleData.insights?.structureComment || "可按基本工资、绩效奖金、补贴、社保公积金和福利拆分人工成本结构。";
  } else if (normalized.includes("增长最快") || normalized.includes("人工成本")) {
    answer = "可按部门人工成本同比增幅排序。当前示例口径下，销售部增长最快，主要由新增编制、奖金池调整和提成发放节奏导致。";
  } else if (normalized.includes("平均薪资") || normalized.includes("销售")) {
    answer = "可按部门工资总额除以在岗人数计算平均薪资，并建议同时展示中位数，避免极端值影响判断。";
  } else if (normalized.includes("研发")) {
    answer = "研发薪酬中位数需要读取研发序列员工薪资并排序取中间值，建议同时对比市场50分位和内部薪酬带宽。";
  } else if (normalized.includes("预算") || normalized.includes("超标")) {
    answer = "可将已使用调薪预算、待审批预算和预留预算合并测算。若使用率超过100%，建议优先调整低绩效或非关键岗位调薪节奏。";
  }
  return `
    <div class="qa-grid">
      <div class="qa-item">
        <strong>${question}</strong>
        <span>${answer}</span>
      </div>
    </div>
  `;
}

function renderMiniBars(rows) {
  return `
    <div class="mini-bars">
      ${rows
        .map(
          ([label, value, color]) => `
            <div class="mini-bar-row">
              <span>${label}</span>
              <div><i style="--mini-width:${value}%;--mini-color:${color}"></i></div>
              <strong>${value}%</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderBars(bars) {
  return `
    <div class="bar-chart">
      ${bars
        .map(
          ([label, value, color]) => `
            <div class="bar-row">
              <span class="bar-label">${label}</span>
              <span class="bar-track">
                <span class="bar-fill" style="--bar-width:${value}%;--bar-color:${color}"></span>
              </span>
              <span class="bar-value">${value}%</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDonut(donut) {
  let cursor = 0;
  const stops = donut.items.map(([, value]) => {
    cursor += value * 3.6;
    return `${cursor}deg`;
  });

  return `
    <div class="donut-wrap">
      <div class="donut" data-center="${donut.center}" style="--donut-a:${stops[0]};--donut-b:${stops[1]};--donut-c:${stops[2]}"></div>
      <div class="legend">
        ${donut.items
          .map(
            ([label, value, color]) => `
              <div class="legend-item">
                <span><i class="legend-swatch" style="--swatch:${color}"></i>${label}</span>
                <strong>${value}%</strong>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderToolCards(features) {
  return `
    <div class="tool-grid">
      ${features
        .map(
          (feature) => `
            <article class="tool-card">
              <header>
                <h3>${feature.title}</h3>
                <span class="entry-icon tone-teal">${icon(feature.icon)}</span>
              </header>
              <p>${feature.desc}</p>
              <ul>
                ${feature.items.map((entry) => `<li><span>${entry}</span><span class="status-tag">跟进中</span></li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderServiceTools(item) {
  return `
    <div class="service-tabs" role="tablist" aria-label="员工服务类型">
      <button class="tab-button is-active" data-service-mode="制度问答">制度问答</button>
      <button class="tab-button" data-service-mode="流程指引">流程指引</button>
    </div>
    <div class="service-matrix" id="serviceMatrix">
      ${item.serviceTopics.map(([name, desc]) => renderServiceTopic(name, desc, "制度问答")).join("")}
    </div>
  `;
}

function renderServiceTopic(name, desc, mode) {
  const action = mode === "制度问答" ? "可生成问答" : "可生成流程";
  return `
    <article class="service-topic">
      <strong>${name}</strong>
      <span>${desc}</span>
      <span class="status-tag">${action}</span>
    </article>
  `;
}

function renderTable(rows) {
  return `
    <table class="table-view">
      <thead>
        <tr>
          <th>对象</th>
          <th>事项</th>
          <th>建议动作</th>
          <th>优先级</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) => `
              <tr>
                <td>${row[0]}</td>
                <td>${row[1]}</td>
                <td>${row[2]}</td>
                <td>${row[3]}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderDocCenter(route, title, hint) {
  const docs = docState[route] || [];
  return `
    <section class="section-band doc-section" id="documents" data-doc-route="${route}">
      <div class="section-title">
        <div>
          <span class="section-label">资料维护</span>
          <h2>${title}</h2>
          <p>${hint}</p>
        </div>
      </div>
      <div class="doc-center">
        <div class="upload-zone">
          <strong>上传与更新资料</strong>
          <p class="doc-hint">选择文件后可填写更新说明，页面会记录资料名称、大小和更新时间。</p>
          <input type="file" multiple data-doc-input="${route}" />
          <textarea data-doc-note="${route}" placeholder="填写本次更新说明，例如：新增2026版个税申报流程。"></textarea>
          <div class="upload-actions">
            <button class="upload-action" data-doc-save="${route}">${icon("upload-cloud")}上传资料</button>
            <button class="upload-action" data-doc-refresh="${route}">${icon("refresh-cw")}更新记录</button>
          </div>
        </div>
        <div>
          <div class="section-title">
            <div>
              <span class="section-label">已维护资料</span>
              <h2>资料列表</h2>
            </div>
          </div>
          <div class="doc-list" data-doc-list="${route}">
            ${renderDocList(route, docs)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderDocList(route, docs = docState[route] || []) {
  if (!docs.length) {
    return `<p class="empty-note">还没有上传记录，可以先上传该页面相关文档。</p>`;
  }

  return docs
    .map(
      (doc) => `
        <article class="doc-item">
          <span class="doc-icon">${icon("file-text")}</span>
          <div>
            <strong>${escapeHtml(doc.name)}</strong>
            <span>${escapeHtml(doc.size)} · ${escapeHtml(doc.note || "未填写更新说明")}</span>
          </div>
          <span class="status-tag">${escapeHtml(doc.time)}</span>
        </article>
      `
    )
    .join("");
}

function saveDocuments(route) {
  const input = document.querySelector(`[data-doc-input="${route}"]`);
  const note = document.querySelector(`[data-doc-note="${route}"]`);
  const files = Array.from(input?.files || []);

  if (!files.length) {
    showToast("请先选择需要上传或更新的资料。");
    return;
  }

  const now = new Date();
  const time = `${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  docState[route] = [
    ...files.map((file) => ({
      name: file.name,
      size: formatSize(file.size),
      note: note?.value.trim(),
      time,
    })),
    ...(docState[route] || []),
  ].slice(0, 8);

  saveDocState();
  refreshDocList(route);
  input.value = "";
  if (note) note.value = "";
  if (route === "recruiting") updateResumeUploadStatus();
  showToast("资料记录已更新。静态原型会保存文件信息，不会上传文件内容。");
}

function refreshDocList(route) {
  const list = document.querySelector(`[data-doc-list="${route}"]`);
  if (list) {
    list.innerHTML = renderDocList(route);
    refreshIcons();
  }
}

function updateRecord(route) {
  const note = document.querySelector(`[data-doc-note="${route}"]`);
  const updateNote = note?.value.trim() || "资料已复核，等待业务确认。";
  const now = new Date();
  const time = `${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  docState[route] = [
    {
      name: "页面资料更新记录",
      size: "更新说明",
      note: updateNote,
      time,
    },
    ...(docState[route] || []),
  ].slice(0, 8);
  saveDocState();
  refreshDocList(route);
  if (note) note.value = "";
  if (route === "recruiting") updateResumeUploadStatus();
  showToast("更新记录已写入资料列表。");
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function render() {
  const route = currentRoute();
  const viewRoot = document.querySelector("#viewRoot");
  document.querySelector("#pageTitle").textContent = modules[route].title;
  renderNav(route);
  viewRoot.innerHTML = route === "home" ? renderHome() : renderModule(route);
  refreshIcons();
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    navigate(routeButton.dataset.route);
    return;
  }

  const saveButton = event.target.closest("[data-doc-save]");
  if (saveButton) {
    saveDocuments(saveButton.dataset.docSave);
    return;
  }

  const refreshButton = event.target.closest("[data-doc-refresh]");
  if (refreshButton) {
    updateRecord(refreshButton.dataset.docRefresh);
    return;
  }

  const scrollButton = event.target.closest("[data-scroll-target]");
  if (scrollButton) {
    document.querySelector(`#${scrollButton.dataset.scrollTarget}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const faqButton = event.target.closest("[data-faq-id]");
  if (faqButton) {
    const faq = serviceKnowledge.faqs.find((entry) => entry.id === faqButton.dataset.faqId);
    const input = document.querySelector("#employeeQuestion");
    if (input && faq) input.value = faq.question;
    setQaResult(faq);
    return;
  }

  const serviceCategoryButton = event.target.closest("[data-service-category]");
  if (serviceCategoryButton) {
    document.querySelectorAll("[data-service-category]").forEach((button) => button.classList.remove("is-active"));
    serviceCategoryButton.classList.add("is-active");
    const category = serviceCategoryButton.dataset.serviceCategory;
    const quickQuestions = document.querySelector("#quickQuestions");
    if (quickQuestions) quickQuestions.innerHTML = renderQuickQuestions(category);
    const faq = serviceKnowledge.faqs.find((entry) => entry.category === category);
    const input = document.querySelector("#employeeQuestion");
    if (input && faq) input.value = faq.question;
    setQaResult(faq);
    return;
  }

  const askButton = event.target.closest("#askQuestionButton");
  if (askButton) {
    const input = document.querySelector("#employeeQuestion");
    const faq = findServiceFaq(input?.value || "");
    setQaResult(faq);
    if (!faq) showToast("暂未匹配到确定答案，建议补充资料或转人工处理。");
    return;
  }

  const roleTemplateButton = event.target.closest("[data-role-template]");
  if (roleTemplateButton) {
    setRecruitingRole(roleTemplateButton.dataset.roleTemplate);
    return;
  }

  const generateJdButton = event.target.closest("#generateJdButton");
  if (generateJdButton) {
    updateGeneratedJd();
    showToast("已根据当前岗位信息生成JD。");
    return;
  }

  const generateQuestionsButton = event.target.closest("#generateQuestionsButton");
  if (generateQuestionsButton) {
    updateInterviewQuestions();
    showToast("结构化面试题已生成。");
    return;
  }

  const screenResumeButton = event.target.closest("#screenResumeButton");
  if (screenResumeButton) {
    simulateResumeScreening();
    return;
  }

  const compActionButton = event.target.closest("[data-comp-action]");
  if (compActionButton) {
    handleCompAction(compActionButton.dataset.compAction);
    return;
  }

  const compSampleButton = event.target.closest("[data-comp-sample]");
  if (compSampleButton) {
    applyCompSample(compSampleButton.dataset.compSample);
    return;
  }

  const developmentActionButton = event.target.closest("[data-dev-action]");
  if (developmentActionButton) {
    handleDevelopmentAction(developmentActionButton.dataset.devAction);
    return;
  }

  const decisionActionButton = event.target.closest("[data-decision-action]");
  if (decisionActionButton) {
    handleDecisionAction(decisionActionButton.dataset.decisionAction);
    return;
  }

  const serviceButton = event.target.closest("[data-service-mode]");
  if (serviceButton) {
    document.querySelectorAll("[data-service-mode]").forEach((button) => button.classList.remove("is-active"));
    serviceButton.classList.add("is-active");
    const matrix = document.querySelector("#serviceMatrix");
    matrix.innerHTML = modules.service.serviceTopics
      .map(([name, desc]) => renderServiceTopic(name, desc, serviceButton.dataset.serviceMode))
      .join("");
  }
});

document.addEventListener("change", (event) => {
  const interviewSelect = event.target.closest("#interviewRoleSelect");
  if (interviewSelect) {
    updateInterviewQuestions(getRecruitingRole(interviewSelect.value));
  }

  const resumeUploadInput = event.target.closest("#resumeUploadInput");
  if (resumeUploadInput) {
    updateResumeUploadStatus();
  }
});

document.querySelector("#homeButton").addEventListener("click", () => navigate("home"));
document.querySelector("#globalUploadButton").addEventListener("click", () => {
  const docSection = document.querySelector("#documents");
  if (docSection) {
    docSection.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    navigate("home");
  }
});

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
