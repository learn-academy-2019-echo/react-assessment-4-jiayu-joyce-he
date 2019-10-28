class Task
    attr_accessor :title, :description, :completed
    def initialize(title)
        @title = title
        @description = description
        @completed = false
    end

    def finish_task
        @completed = true
        self
    end

    def check_status
        @completed ? "Finished" : "Not finished"
    end
end

a_task = Task.new("eat food").finish_task
p a_task
p a_task.completed


# completed = a_task.select {|item| item.completed == true}
# p completed

# p [1,2,3,4,5,6].select { |n| n.even? }
