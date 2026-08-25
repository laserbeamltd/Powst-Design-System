import React, { useState } from 'react';
import { INITIAL_TASKS } from '../data/designTokens';
import { TaskItem } from '../types';
import { 
  Plus, 
  Search, 
  Check, 
  Filter, 
  Trash2, 
  Calendar, 
  User, 
  Sparkles, 
  ArrowUpRight,
  LayoutGrid,
  List,
  CheckCircle2,
  Clock,
  Flame,
  X
} from 'lucide-react';

export const LiveAppWorkbench: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  
  // New task form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Design' | 'Engineering' | 'Research' | 'Launch'>('Design');
  const [newPriority, setNewPriority] = useState<'bold-pink' | 'charcoal' | 'subtle'>('bold-pink');
  const [newDue, setNewDue] = useState('Today, 6:00 PM');
  const [newAssignee, setNewAssignee] = useState('Alex Morgan');

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: TaskItem = {
      id: `t-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      completed: false,
      priority: newPriority,
      due: newDue,
      assignee: newAssignee,
    };

    setTasks([newTask, ...tasks]);
    setNewTitle('');
    setIsNewModalOpen(false);
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.assignee.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || task.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Design', 'Engineering', 'Research', 'Launch'];

  return (
    <section className="space-y-8">
      {/* Sample App Header Intro */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE APPLICATION SPECIMEN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-black">
            Pulse Studio Workspace
          </h2>
          <p className="text-xs sm:text-sm font-bold text-black/70">
            Experience how the friendly, bold, minimalist 3-color design system harmonizes in an active workflow.
          </p>
        </div>

        <button
          id="live-add-task-btn"
          onClick={() => setIsNewModalOpen(true)}
          className="h-12 px-6 bg-[#FF007F] hover:bg-[#E0006F] text-white font-black text-xs sm:text-sm uppercase tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>New Project Task</span>
        </button>
      </div>

      {/* Metric Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Progress Card */}
        <div className="bg-white p-6 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-black/70">Completion Rate</span>
            <span className="w-3 h-3 bg-[#FF007F] border border-black" />
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-4xl font-black tracking-tight text-black">{progressPercent}%</div>
            <span className="text-xs font-black uppercase text-black/70">{completedCount} of {tasks.length} tasks</span>
          </div>
          <div className="w-full bg-[#FFF0F6] h-3 border-2 border-black overflow-hidden">
            <div
              className="bg-[#FF007F] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Priority Focus */}
        <div className="bg-[#FFF0F6] p-6 border-[3px] border-black shadow-[6px_6px_0px_0px_#FF007F] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-[#FF007F]">High Priority Focus</span>
            <Flame className="w-4 h-4 text-black" />
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-4xl font-black tracking-tight text-black">
              {tasks.filter((t) => t.priority === 'bold-pink' && !t.completed).length}
            </div>
            <span className="text-xs font-black uppercase text-[#FF007F]">Urgent pending</span>
          </div>
          <p className="text-[11px] font-bold text-black/70">
            Styled with vibrant pink indicators for focal visual attention.
          </p>
        </div>

        {/* System Health */}
        <div className="bg-black text-white p-6 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-white/70">WCAG AA Status</span>
            <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#FF007F] text-white border border-white/20">
              100% PASS
            </span>
          </div>
          <div className="text-4xl font-black tracking-tight text-white">4.74 : 1+</div>
          <p className="text-[11px] font-bold text-white/70">
            All text, buttons, and state chips satisfy AA contrast criteria.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-black absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks, teammates, categories..."
              className="w-full h-11 pl-10 pr-4 border-2 border-black bg-[#FFF0F6] text-sm text-black font-bold focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_#FF007F] shadow-[2px_2px_0px_0px_#000] transition-all"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 self-end sm:self-auto bg-white p-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 text-xs font-black transition-all cursor-pointer ${
                viewMode === 'list' ? 'bg-[#FF007F] text-white' : 'text-black hover:bg-[#FFF0F6]'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 text-xs font-black transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#FF007F] text-white' : 'text-black hover:bg-[#FFF0F6]'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t-2 border-black">
          <span className="text-xs font-black uppercase text-black mr-1 hidden sm:inline">Category:</span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-black uppercase tracking-wider whitespace-nowrap border-2 border-black transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white shadow-[2px_2px_0px_0px_#FF007F]'
                    : 'bg-white text-black hover:bg-[#FFF0F6] shadow-[2px_2px_0px_0px_#000]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Task List / Grid View */}
      {filteredTasks.length === 0 ? (
        <div className="bg-white p-12 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] text-center space-y-3">
          <div className="w-12 h-12 bg-[#FFF0F6] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-black uppercase text-black">No tasks matching your filter</h4>
          <p className="text-xs font-bold text-black/70">
            Try adjusting your search keywords or switch category filter to "All".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-5 py-2.5 text-xs font-black uppercase tracking-wider bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_#FF007F] hover:bg-[#18181B] transition-all cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : viewMode === 'list' ? (
        <div className="bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_#000] divide-y-2 divide-black">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors ${
                task.completed ? 'bg-[#FFF0F6]/40 opacity-75' : 'hover:bg-[#FFF0F6]/60'
              }`}
            >
              {/* Checkbox & Title */}
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 border-2 border-black flex items-center justify-center flex-shrink-0 transition-all cursor-pointer ${
                    task.completed
                      ? 'bg-[#FF007F] text-white shadow-[2px_2px_0px_0px_#000]'
                      : 'bg-white hover:bg-[#FFF0F6]'
                  }`}
                >
                  {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                </button>

                <div className="min-w-0">
                  <p
                    className={`text-sm sm:text-base font-black truncate transition-all ${
                      task.completed ? 'line-through text-black/40' : 'text-black'
                    }`}
                  >
                    {task.title}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-bold text-black/60 mt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-black" />
                      <span>{task.due}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-black" />
                      <span>{task.assignee}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Priority & Category Badges */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="hidden sm:inline-flex px-3 py-1 text-[11px] font-black uppercase bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                  {task.category}
                </span>

                {task.priority === 'bold-pink' && (
                  <span className="px-3 py-1 text-[11px] font-black uppercase bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                    Vibrant
                  </span>
                )}
                {task.priority === 'charcoal' && (
                  <span className="px-3 py-1 text-[11px] font-black uppercase bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_#FF007F]">
                    Solid
                  </span>
                )}
                {task.priority === 'subtle' && (
                  <span className="px-3 py-1 text-[11px] font-black uppercase bg-[#FFF0F6] text-black border-2 border-black">
                    Normal
                  </span>
                )}

                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-black/50 hover:text-black hover:bg-[#FFF0F6] border-2 border-transparent hover:border-black transition-all cursor-pointer"
                  title="Delete task"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`p-5 border-[3px] border-black transition-all space-y-4 flex flex-col justify-between ${
                task.completed
                  ? 'bg-[#FFF0F6]/40 opacity-75 shadow-[4px_4px_0px_0px_#000]'
                  : 'bg-white shadow-[6px_6px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#FF007F]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase px-2.5 py-0.5 bg-white text-black border-2 border-black">
                    {task.category}
                  </span>

                  {task.priority === 'bold-pink' ? (
                    <span className="px-2.5 py-0.5 text-[10px] font-black uppercase bg-[#FF007F] text-white border-2 border-black">
                      Vibrant
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 text-[10px] font-black uppercase bg-black text-white border-2 border-black">
                      Standard
                    </span>
                  )}
                </div>

                <h4
                  className={`text-sm sm:text-base font-black leading-snug ${
                    task.completed ? 'line-through text-black/40' : 'text-black'
                  }`}
                >
                  {task.title}
                </h4>
              </div>

              <div className="pt-3 border-t-2 border-black flex items-center justify-between text-xs font-bold text-black/70">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 border-2 border-black flex items-center justify-center cursor-pointer ${
                      task.completed ? 'bg-[#FF007F] text-white' : 'bg-white'
                    }`}
                  >
                    {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>
                  <span className="text-[11px]">{task.due}</span>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-black/50 hover:text-black cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Dialog for New Task */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-[4px] border-black shadow-[10px_10px_0px_0px_#FF007F] max-w-lg w-full p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b-2 border-black">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-black">Create New Item</h3>
                <p className="text-xs font-bold text-black/70">Add a task to the interactive sample workspace.</p>
              </div>
              <button
                onClick={() => setIsNewModalOpen(false)}
                className="p-1.5 border-2 border-black hover:bg-[#FF007F] hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddTask} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-black">
                  Task Title <span className="text-[#FF007F]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Audit mobile typography line heights..."
                  className="w-full h-12 px-4 border-[3px] border-black text-sm text-black font-bold focus:outline-none focus:shadow-[3px_3px_0px_0px_#FF007F]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-black">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full h-11 px-3 border-2 border-black text-xs font-black uppercase bg-white focus:outline-none focus:shadow-[3px_3px_0px_0px_#FF007F]"
                  >
                    <option value="Design">Design</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Research">Research</option>
                    <option value="Launch">Launch</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-black">Priority Accent</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full h-11 px-3 border-2 border-black text-xs font-black uppercase bg-white focus:outline-none focus:shadow-[3px_3px_0px_0px_#FF007F]"
                  >
                    <option value="bold-pink">Vivid Pink (Hero)</option>
                    <option value="charcoal">Jet Black (Solid)</option>
                    <option value="subtle">Subtle Surface</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-black">Due Date</label>
                  <input
                    type="text"
                    value={newDue}
                    onChange={(e) => setNewDue(e.target.value)}
                    className="w-full h-11 px-3 border-2 border-black text-xs font-bold text-black focus:outline-none focus:shadow-[3px_3px_0px_0px_#FF007F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-black">Assignee</label>
                  <input
                    type="text"
                    value={newAssignee}
                    onChange={(e) => setNewAssignee(e.target.value)}
                    className="w-full h-11 px-3 border-2 border-black text-xs font-bold text-black focus:outline-none focus:shadow-[3px_3px_0px_0px_#FF007F]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t-2 border-black">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black hover:bg-[#FFF0F6] border-2 border-transparent hover:border-black cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#FF007F] hover:bg-[#E0006F] text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
